import React, { useEffect } from "react";
import styled from "styled-components";
import { GoAlert } from "react-icons/go";

const Alarm = styled.div`
  background-color: ${(props) => props.theme.orange2};
  border: 1px solid ${(props) => props.theme.orange1};
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem reg(0 0 0 /15%);
  height: 40px;
  width: 250px;
  padding: 5px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.black1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function TodoToast(props) {
  useEffect(() => {
    let timer = setTimeout(() => {
      props.setToastState(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Alarm>
      <GoAlert></GoAlert>
      <p>입력하지 않은 칸이 있습니다.</p>
    </Alarm>
  );
}

export default TodoToast;
