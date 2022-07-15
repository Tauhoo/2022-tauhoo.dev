import React from 'react'
import styled from 'styled-components'
import Container from '../components/Container'
import ContentLayout from '../components/ContentLayout'
import GlobalStyle from '../components/globalStyle'
import Navbar from '../components/Navbar'
import ProfilePanel from '../components/ProfilePanel'

const Layout = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  height: 100%;
  gap: 20px;
`

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <title>Home Page</title>
      <Container>
        <Layout>
          <Navbar></Navbar>
          <ContentLayout>
            <div
              style={{ height: '100%', width: '100%', backgroundColor: 'red' }}
            ></div>
            <ProfilePanel />
          </ContentLayout>
        </Layout>
      </Container>
    </main>
  )
}

export default IndexPage
