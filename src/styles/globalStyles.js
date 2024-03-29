import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";
import reset from "styled-reset";


export const customMedia = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em'
})
// 기본 스타일 입니다.
//reset.css


export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
    position: relative;
    display: block;
    font-size: 12px;
    width:80%;
    height: 100%;
    line-height: 1.5;
    margin: 0 auto;
    word-break: keep-all;
    word-wrap: break-word;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

`;
