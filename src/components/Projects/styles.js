import styled from 'styled-components';

export const C = {
  Container: styled.div``,
  Content: styled.section`
    display: grid;
    justify-content: center;
    margin-top: 10rem !important;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));

    article:last-child {
      grid-column: span 3;
      @media (max-width: 1175px) {
        grid-column: span 1;
      }
    }
  `,
};
