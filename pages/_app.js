// import * as React from "react";
// import { CacheProvider } from "@emotion/react";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import Head from "next/head";
// import PropTypes from "prop-types";

// import createEmotionCache from "../src/createEmotionCache";
// import { theme } from "../src/utils/theme";

// const clientSideEmotionCache = createEmotionCache();

// function TezSign(props) {
//   const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

//   return (
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
{
  /*        <title>TezSign</title> */
}
//       </Head>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         <Component {...pageProps} />
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }

// TezSign.propTypes = {
//   Component: PropTypes.elementType.isRequired,
//   emotionCache: PropTypes.object,
//   pageProps: PropTypes.object.isRequired,
// };

// export default TezSign;

/** Below block removes Next.js's server side injected CSS. Ensures Material UI's styles will show as DOM loads and not after. */
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import React from "react";

import previewImage from "../src/assets/meta/preview-image.png";
import { theme } from "../src/utils/theme";

export default function TezSign(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>TezSign: A Digital Signing Platform for Everyone.</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta property="og:url" content="https://www.tezsign.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TezSign: A Digital Signing Platform for Everyone."
        />
        <meta
          property="og:description"
          content="We aim to disrupt the signing experience with the blockchain."
        />
        <meta property="og:image" content={previewImage.src} />
        <meta name="twitter:card" content="summary" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

TezSign.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
