/** @jsxImportSource theme-ui */
import { Helmet } from "react-helmet-async";

import config from "../core/config";

const Head = () => {
  const { title, description } = config;
  const { href, origin } = window.location;
  return (
    <Helmet titleTemplate={`%s | Cats in Cups`} defaultTitle={title}>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content={description} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${origin}/logo512.png`} />
    </Helmet>
  );
};

export default Head;
