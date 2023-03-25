import React from "react";
import Logo from "../assets/Logo.png";
import styled from "styled-components";

const Footers = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 35px;
  align-items: center;
  font-weight: bold;
  background-color: ${(props) => props.theme.Footer_bg};
  border: 2px solid ${(props) => props.theme.Color};
  padding: 10px;
  position: sticky;
  bottom: 0px;
`;

function Footer() {
  return (
    <>
      <Footers>
        <img src={Logo} alt="GDSC로고" width={80} height={48} />
        <p>Donny & James</p>
      </Footers>
    </>
  );
}

export default Footer;
