// import React from "react"
// import styled from "styled-components"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <Container>
//       <h1>NOT FOUND</h1>
//       <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//     </Container>
//   </Layout>
// )

// export default NotFoundPage

// const Container = styled.div`
//   margin: 5em auto;
//   min-height: 500px;
//   text-align: center;
// `

const NotFound = () => {
  if (typeof window !== "undefined") {
    return (window.location = "/")
  }

  return null
}

export default NotFound
