import * as React from "react"
import GlobalStyle from "../components/globalStyle"
import Navbar from "../components/Navbar"

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Navbar></Navbar>
    </main>
  )
}

export default IndexPage
