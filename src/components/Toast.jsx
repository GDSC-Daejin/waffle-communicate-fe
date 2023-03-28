import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { GoAlert, GoCheck } from "react-icons/go";

const slideIn = keyframes`
  from {
    transform: translateX(150%);
  }
  to {
    transform: translateX(0%);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(150%);
  }
`;

const Alarm = styled.div`
  box-shadow: 0 0.5rem 1rem reg(0 0 0 /15%);
  padding: 5px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 4;
  top: 10%;
  right: 0px;
  animation: ${slideIn} 1s ease-in-out 0s 1 normal forwards,
    ${slideOut} 1s ease-in-out 2s 1 normal forwards;
`;

/* Alarm1에서 AlertContainer로 변경*/ 
const AlertContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.Alert_bg};
  border: 2px solid ${(props) => props.theme.Alram_bg};
  border-radius: 10px;
  ${({ isError }) =>
    isError &&
    css`
      border-radius: 10px;
      border: 2px solid black;
      background-color: #e9573e;
    `}
`;

/* Icons1,Icons2, 에서 Icons로 이름수정 및 코드 변경  */
const Icons = styled.div`
    color:${(props)=> props.theme.Icons_bg1};
    ${({ isError }) =>
    isError &&
    css`
      color:#FFCE55;
    `}
`;

/* switch함수 변경 useEffect 위치수정*/
function Toast({ code, setToastState }) {
  const getToastMessage = (code) => {
    switch (code) {
      case 'repeated':
        return { message: '이미 존재하는 내용입니다.', isError: true, Icon: GoAlert };
      case 'empty':
        return { message: '빈 칸입니다. 내용을 입력해주세요.', isError: true, Icon: GoAlert };
      case 'success':
        return { message: '작업이 완료되었습니다.', isError: false, Icon: GoCheck };
      default:
        return { message: '', isError: false, Icon: null };
    }
  };

  const { message, isError, Icon } = getToastMessage(code);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToastState(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [setToastState]); /* setToastState삽입 */

  /* if문 삽입 */
  if (!message) {
    return null;
  }

  /* return문 수정 */
  return (
    <Alarm>
      <AlertContainer isError = {isError} >
        {Icon && <Icons isError = {isError}><Icon /></Icons>}
        <p>{message}</p>
      </AlertContainer>
    </Alarm>
  );
};

export default Toast;