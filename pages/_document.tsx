import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="h-full">
      <Head />
      <body className="bg-zinc-900 h-full overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
