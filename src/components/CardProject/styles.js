import styled from 'styled-components';

export const C = {
  Container: styled.article`
    justify-self: center;
    margin: 1rem;
  `,
  Title: styled.div`
    padding: 1rem 0;
    h1 {
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      color: ${({ theme }) => theme.colors.grayWhite};
    }
  `,
  Image: styled.div`
    img {
      width: 100%;
      height: auto;
      max-height: 35rem;
      min-height: 35rem;
      object-fit: cover;
    }
  `,
};
