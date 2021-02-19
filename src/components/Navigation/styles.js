import styled from 'styled-components';

export const C = {
  Container: styled.div`
    background: ${({ theme }) => theme.colors.grayWhite};
    border-top: 4px solid ${({ theme }) => theme.colors.primary};
    padding: 1rem;
  `,

  Content: styled.nav``,
  NavList: styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  LogoArea: styled.section`
    img {
      width: 100%;
      object-fit: cover;
    }
  `,
  LinksArea: styled.section`
    display: flex;
    justify-content: center;
    align-items: center;

    li + li {
      margin-left: 1rem;
    }
  `,
};
