import styled from 'styled-components';

export const C = {
  Container: styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Socials: styled.section`
    background: ${({ theme }) => theme.colors.primary};
    padding: 1rem 2rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      transition: all 400ms ease;
      :hover {
        transform: translateY(-10%);
      }
    }

    a + a {
      margin-left: 1rem;
    }
  `,
};
