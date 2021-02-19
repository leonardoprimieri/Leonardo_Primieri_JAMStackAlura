import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../src/assets/styles/GlobalStyle';

const theme = {
  colors: {
    primary: '#E9C46A',
    pureWhite: '#FFFFFF',
    grayWhite: '#FFF8E6',
    pureBlack: '#000000',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Leonardo - Portfólio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Fira+Sans+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
