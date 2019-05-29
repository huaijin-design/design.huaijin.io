import React from "react"
import PropTypes from "prop-types"
import { Huaijin } from "huaijin"
import { Location } from "@reach/router"
import { Global, css } from "@emotion/core"

import Header from "../header"
import Slide from "../slide"
import styles from "./styles.module.sass"

const theme = {
  // "color-primary": "0,0,255",
}

const Layout = ({ children, location }) => (
  <Huaijin theme={theme}>
    <div className={styles.root}>
      <Header />
      <main className={styles.main}>
        {location.pathname !== "/" && <Slide />}
        {children}
      </main>
    </div>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Ubuntu, "Open Sans", "Helvetica Neue", sans-serif;
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  </Huaijin>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
}

export default function LayoutWithLocation(props) {
  return (
    <Location>
      {locationProps => <Layout {...locationProps} {...props} />}
    </Location>
  )
}
