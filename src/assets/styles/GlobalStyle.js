import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  html {
    scroll-behavior:smooth;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background: #212121;
  }

  .container {
    max-width:70rem;
    margin:0 auto;
  }

  ul {
    list-style:none;
  }

`;
