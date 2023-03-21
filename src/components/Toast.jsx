import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { GoAlert } from "react-icons/go";

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
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.bgColor};

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

function Toast(props) {
  let msg;

  useEffect(() => {
    let timer = setTimeout(() => {
      props.setToastState(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const Alert = () => {
    switch (props.code) {
      case "repeated":
        msg = "이미 존재하는 내용입니다.";
        return (
          <>
            <GoAlert />
            <p>{msg}</p>
          </>
        );

      case "empty":
        msg = "빈 칸입니다. 내용을 입력해주세요.";
        return (
          <>
            <GoAlert />
            <p>{msg}</p>
          </>
        );
      case "success":
        msg = "작업이 완료되었습니다.";
        return (
          <>
            <GoAlert />
            <p>{msg}</p>
          </>
        );
      /*default:
        return <>default</>;*/
    }
  };

  return <Alarm>{Alert()}</Alarm>;
}

export default Toast;
