import styled from 'styled-components';
export const C = {
  Container: styled.div`
    height: 100vh;
    background-image: url('images/ellipse.png');
    background-repeat: no-repeat;
    background-position: 0 -184px;
  `,
  Content: styled.section`
    svg {
      width: 100%;
      height: 30rem;
    }
  `,
  TextArea: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.primary};

    svg {
      height: 3rem;
      margin: 2rem 0;
    }
  `,
};
