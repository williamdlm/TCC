import { createGlobalStyle, ThemeProvider } from "styled-components";
import db from "../db.json";
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
   /* @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'); */

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
    //font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

`;

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <title>QUIZZARD</title>
        <meta
          name="google-site-verification"
          content="etEJ5pGxXGSqGyGM_OOMKO4UWHWrkJQ2TqDxRcR2iwY"
        />
        <link
          rel="shortcut icon"
          href="https://res.cloudinary.com/dhmkfekt2/image/upload/v1634872293/050-fairytale_jhafzp.ico"
        ></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
