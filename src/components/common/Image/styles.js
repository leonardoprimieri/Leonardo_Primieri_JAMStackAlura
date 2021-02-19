import styled from 'styled-components';

export const Container = styled.div`
  display: grid;

  img {
    display: block;
    width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }
`;

export const Skeleton = styled.div`
  grid-area: 1/1;
  height: 100%;
  background-image: linear-gradient(90deg, #eee 0px, #ccc 50%, #eee 100%);
  background-color: #eee;
  background-size: 200%;
  animation: skeleton 1.5s infinite linear;

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
