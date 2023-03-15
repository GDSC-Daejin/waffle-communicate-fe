import React from "react";
import Logo from "./img/Logo.png";
import styled from "styled-components";

export const Logos = styled.div`
  display:flex;
  justify-content:space-between;
  font-size:20px;
  font-weight:bold;
`;

export const Images = styled.image`
  display:flex;
  position:relative;
  bottom:100px;
`;

function Footer (){
  return(
    <>
      <Logos>
        <Images>
          <img src={Logo} width="350" alt="GDSC로고" height="300"/>
        </Images>
        <p>James X Donny</p>
      </Logos>
    </>
  );
}

export default Footer;