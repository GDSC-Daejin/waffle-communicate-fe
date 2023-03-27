import { useState, useRef } from "react";
import styled from "styled-components";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useTodoDispatch, useTodoState } from "../Context";
import Toast from "./Toast";
import { customMedia } from "../styles/globalStyles";

const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  /* flex-wrap row-wrep에서 wrap으로 바뀜 */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  z-index: 3;
  /* cursor삼항연산자로 바뀜 */
  cursor: ${({ disabled }) => (disabled ? "progress" : "pointer")};
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;

const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  position: fixed;
  top: 30%;
  left: 25%;
  right: 0;
  width: 50%;
  height: 30%;
  text-align: center;
  text-decoration: none;
  padding: 0px 0px;
  background-color: ${(props) => props.theme.Modal_bg};
  color: black;
  font-weight: ${(props) => props.theme.fontWeight};
  border: 3px solid ${(props) => props.theme.Modal_border_bg};
  z-index: 4;
  cursor: default;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  
  ${customMedia.lessThan("mobile")`
    width:80%;
    position: fixed;
    left: 10%;
    height:auto;
  `};
`;

const Navbar = styled.div`
  background-color: ${(props) => props.theme.Modal_Navbar_bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${(props) => props.theme.Modal_border_bg};
`;

const Title = styled.div`
  margin-left: 5%;
`;

const Exit = styled.button`
  margin-right: 2%;
  font-size: 34px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  color: grey;
  display: flex;
  align-items: center;
  justify-content: center;

  /* hover 삼항연산자로 바뀜 */
  &:hover {
    color: blue;
    cursor: ${({ disabled }) => (disabled ? "progress" : "pointer")};
  }
`;

const TodoButton = styled.button`
  transition: all 0.2s ease-in-out;
  background-color: ${(props) => props.theme.buttoncolor};
  border: 3px solid;
  border-radius: 10px;
  border-style: outset;
  cursor: pointer;
  font-size: 35px;
  margin: 2px;
  ${customMedia.lessThan("mobile")`
    width:30%;
    font-size:12px;
    position: relative;
    left:-3px;
    text-align:center;
  `};
  /* 삼항 연산자 */
  ${({ disabled }) => disabled && `cursor: progress;`}
`;

const ModalBody = styled.div`
  margin-top: 5%;
  ${customMedia.lessThan("mobile")`
    width:100%;
    padding-left:3px;
    position:relative;
    top:10px;
  `};
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 5% 0%;
  
`;

const Form = styled.form`
`;

const ListAdd = styled.input`
  width: 70%;
  margin-bottom: 10px;
  margin-right: 1%;
  font-size: 30px;
  height: 50px;
  
  ${({ disabled }) => disabled && `
    cursor: progress;
  `};
   ${customMedia.lessThan("mobile")`
    width:250px;
    height:50px;
  `};
`;
/* export 삭제 */
const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastState, setToastState] = useState(false);
  const [code, setCode] = useState("");

  const titleInputRef = useRef();
  const dispatch = useTodoDispatch();
  const todos = useTodoState();

  const openModalHandler = () => {
    if (!toastState) {
      setIsOpen(!isOpen);
      props.getDragMode(isOpen);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let exitCode = 0;
    const enteredTitle = titleInputRef.current.value;

    const resetTitle = () => {
      titleInputRef.current.value = "";
    };

    setToastState(true);

    if (!enteredTitle || !enteredTitle.trim().length) {
      setCode("empty");
    } else {
      /*map 함수에서 forEach 함수로 변환*/ 
      todos.forEach((todo) => {
        if (todo.text === enteredTitle) {
          setCode("repeated");
          exitCode = -1;
        }
      });

      if (exitCode === -1) return resetTitle();

      dispatch({
        type: "EDIT",
        id: props.id,
        text: enteredTitle,
      });

      setCode("success");
      return resetTitle();
    }
  };

  const onRemove = () => {
    dispatch({
      type: "REMOVE",
      id: props.id,
    });
    alert("성공적으로 제거되었습니다.");
  };

  const onToggle = () => {
    dispatch({
      type: "COMPLETE",
      id: props.id,
    });

    alert("와 축하합니다. 할 일을 끝냈네요~");
    props.getDragMode(isOpen);
  };

  const Alert = () => {
    return toastState && <Toast setToastState={setToastState} code={code} />;
  };

  return (
    <>
      <TodoButton onClick={openModalHandler}>
        <FiEdit />
      </TodoButton>
      <Alert />
      {isOpen ? (
        <>
          <ModalBackdrop  onClick={openModalHandler} disabled={toastState} />
          <ModalView>
            <Navbar>
              <Title>EDIT</Title>
              <Exit onClick={openModalHandler} disabled={toastState}>
                &times;
              </Exit>
            </Navbar>
            <ModalBody>
              <Form onSubmit={onSubmit}>
                <ListAdd
                  autoFocus
                  placeholder={props.text}
                  disabled={toastState}
                  ref={titleInputRef}
                />
                <TodoButton onClick={onSubmit} disabled={toastState}>
                  수정하기
                </TodoButton>
              </Form>
            </ModalBody>
            <ModalFooter>
              <TodoButton onClick={onToggle}>완료</TodoButton>
              <TodoButton onClick={onRemove}>
                <FiTrash2 />
              </TodoButton>
            </ModalFooter>
          </ModalView>
        </>
      ) : null}
    </>
  );
};
export default Modal;

