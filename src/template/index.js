import * as React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Markdown } from "huaijin"

import Layout from "../components/layout"
import Playground from "../components/playground"
import styles from "./styles.module.sass"

const Components = ({ data }) => {
  const title = data.docs.nodes.find(v =>
    /docs\/\S+\/index.md$/.test(v.fileAbsolutePath)
  ).rawMarkdownBody
  const props = data.docs.nodes.find(v =>
    /docs\/\S+\/props.md$/.test(v.fileAbsolutePath)
  ).rawMarkdownBody
  const main = data.docs.nodes.filter(
    v =>
      !/docs\/\S+\/index.md$/.test(v.fileAbsolutePath) &&
      !/docs\/\S+\/props.md$/.test(v.fileAbsolutePath)
  )
  return (
    <Layout>
      <div className={styles.wrapper}>
        <section className={styles.title}>
          <Markdown>{title}</Markdown>
        </section>
        <section className={styles.docs}>
          {main.map(prop => {
            const { frontmatter, rawMarkdownBody } = prop
            return (
              <div style={{ order: frontmatter.order }} key={frontmatter.order}>
                <Markdown
                  overrides={{
                    pre: {
                      component: Playground,
                    },
                  }}
                >
                  {rawMarkdownBody}
                </Markdown>
              </div>
            )
          })}
        </section>
        <section className={styles.props}>
          <Markdown>{props}</Markdown>
        </section>
      </div>
    </Layout>
  )
}

Components.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Components

export const pageQuery = graphql`
  query($regex: String!) {
    docs: allMarkdownRemark(filter: { fileAbsolutePath: { regex: $regex } }) {
      nodes {
        frontmatter {
          title
          chinese
          english
          order
          desc
        }
        rawMarkdownBody
        html
        fileAbsolutePath
      }
    }
  }
`
