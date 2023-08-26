import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <NextNProgress
        color="#db0000"
        options={{
          showSpinner: false,
        }}
      />
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        newestOnTop
        draggable
        pauseOnHover
        theme="dark"
        hideProgressBar
      />
    </div>
  );
}
