
import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const BlogPage = ({ data }) => (
  <Layout>
    <Seo title="Blog" />
    <div className={styles.textCenter}>
      <h1 className="text-3xl font-bold">Blog Page</h1>
      <div className="grid grid-cols-4 gap-4">
      {data.allPrismicPost.edges.map(post => {
        return (
          <div key={post.node.uid} className='rounded-md border-double border-gray-400 border-4'>
            <h3>{post.node.data.title.text}</h3>
            <br />
            <Link to={`${post.node.uid}`}>Открыть</Link>
            <br />
            <br />
            <br />
          </div>
        )
      })}
      </div>
    </div>
  </Layout>
)
  
  /**
   * Head export to define metadata for the page
   *
   * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
   */
  export const pageQuery = graphql`
  query PostQuery {
    allPrismicPost {
      edges {
        node {
          uid
          data {
            title {
              text
            }            
          }
        }
      }
    }
  }
  `
  
  export default BlogPage