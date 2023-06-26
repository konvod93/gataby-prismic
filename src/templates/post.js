import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const Post = ({ data }) => {
  if (!data) return null
  const post = data.prismicPost

  return (
    <Layout>
      <Link to="/blog">Вернуться</Link>
      <br />
      <h1>{ post.data.title.text }</h1>
      <div dangerouslySetInnerHTML={{__html: post.data.content.html}}/>
    </Layout>
  )
}
  /**
   * Head export to define metadata for the page
   *
   * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
   */
  export const Head = () => <Seo title="Post" />

  export const pageQuery = graphql`
  query PostByUid($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
  `
  
  export default Post