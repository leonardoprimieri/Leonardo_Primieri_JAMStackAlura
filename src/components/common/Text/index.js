import styled, { css } from 'styled-components';

const TextVariants = {
  paragraphText: css`
    font-size: 1.3rem;
    line-height: 1.3;
    font-family: 'Fira Sans', sans-serif;
  `,

  titleText: css`
    font-size: 2rem;
    line-height: 1.5;
    font-family: 'Fira Sans Condensed', sans-serif;
  `,

  smallText: css`
    font-size: 1rem;
    line-height: 1;
    font-family: 'Fira Sans Condensed', sans-serif;
  `,
};

const Container = styled.span`
  ${({ variant }) => TextVariants[variant]};
`;

const Text = ({ tag, variant, children, color }) => {
  return (
    <Container variant={variant} as={tag}>
      {children}
    </Container>
  );
};

Text.defaultProps = {
  tag: 'span',
};

export default Text;
