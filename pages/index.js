import Head from "next/head"
import Header from "./comp/header"
import Home from "./comp/home"

// import app's configuration
import config from "../appconfig.json"

export default function Index() {
  return <>
    <Head>
      <title>{config.title}</title>
    </Head>
    <Header
      navbarBrand={config.navbarBrand}
    ></Header>
    <Home/>
  </>
}