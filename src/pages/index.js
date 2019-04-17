import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "./styles.module.sass"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className={styles.hero}>
        <div className={styles.logo}>
          <Img
            className={styles.logoImg}
            fluid={data.logo.childImageSharp.fluid}
            alt={data.site.siteMetadata.title}
          />
        </div>
        <h1 className={styles.title}>{data.site.siteMetadata.title}</h1>
        <p className={styles.description}>
          {data.site.siteMetadata.description}
        </p>

        <div className={styles.row}>
          <Link to="/components/button" className={styles.card}>
            <h3>Components</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
