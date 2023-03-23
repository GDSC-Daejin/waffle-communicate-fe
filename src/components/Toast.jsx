import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
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
const Alarm1 = styled.div` 
 display: flex;
 background-color: ${(props)=>props.theme.Alert_bg};
 ${({ error }) =>
    error &&
    `
    background-color: #E9573E;
  `}
`;

const Icons1 = styled.div` 
  color:${(props)=> props.theme.Icons_bg};
`;

const Icons2 = styled.div`
  color:${(props)=> props.theme.Icons_bg1};
`;


function Toast(props) {
  let msg;
  let error;

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
        error=true;
        console.log(error);
        return (
          <Alarm1 error={error}>
            <Icons1><GoAlert /></Icons1>
            <p>{msg}</p>
          </Alarm1>
        );
        

      case "empty":
        msg = "빈 칸입니다. 내용을 입력해주세요.";
        error=true;
        return (
          <Alarm1 error={error}>
            <Icons1><GoAlert /></Icons1>
            <p>{msg}</p>
          </Alarm1>
        );
      case "success":
        msg = "작업이 완료되었습니다.";
        error=false;
        return (
          <Alarm1 error={error}>
            <Icons2><GoCheck/></Icons2>
            <p>{msg}</p>
          </Alarm1>
        );
      /*default:
        return <>default</>;*/
    }
  };

  return <Alarm error={error}>{Alert()}</Alarm>;
}

export default Toast;