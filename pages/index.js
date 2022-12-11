import Head from "next/head"
import Header from "./comp/_header"
import Home from "./comp/_home"

// import app's configuration
import config from "../appconfig.json"

export default function Index() {
  return <>
    <Head>
      <title>{config.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>

    <Header
      addtClass="fixed-top"
    ></Header>
    
    <Home/>
  </>
}