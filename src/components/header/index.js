import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Button } from "huaijin"
import Img from "gatsby-image"
import styles from "./styles.module.sass"

const links = [
  { href: "https://github.com/huaijin-design/huaijin", label: "Github" },
].map(link => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Header = () => {
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
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <div className={styles.logoImg}>
            <img
              src={data.logo.childImageSharp.fluid.src}
              alt={data.site.siteMetadata.title}
            />
          </div>
          <span className={styles.logoTitle}>Huaijin Design</span>
        </Link>
      </div>

      <div className={styles.headerMain}>
        <div className={styles.headerMainItem}>
          <Link to="/components/button">
            <Button text size="small">
              components
            </Button>
          </Link>
        </div>
        {links.map(({ key, href, label }) => (
          <div className={styles.headerMainItem} key={key}>
            <Button text size="small" href={href} target="_blank">
              {label}
            </Button>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
