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
      animation: boucing infinite 0.7s ease;
    }

    #a {
      position: relative;
      :after {
        content: '';
        height: 4px;
        width: 5rem;
        margin-left: 1rem;
        position: absolute;
        top: 50%;
        background-color: ${({ theme }) => theme.colors.primary};
      }
      :before {
        content: '';
        height: 4px;
        width: 5rem;
        margin-right: 1rem;
        position: absolute;
        left: -6rem;
        top: 50%;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }

    @keyframes boucing {
      0% {
        transform: translateY(10%);
      }
      100% {
        transform: initial;
      }
    }
  `,
};
