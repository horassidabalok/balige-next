import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import "../styles/app.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);  
  return <Component {...pageProps} />
}

export default MyApp
