import React from "react"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import * as Huaijin from "huaijin"
import styles from "./styles.module.sass"

const scope = {
  ...Huaijin,
}

const Playground = ({ children }) => {
  return (
    <section className={styles.playground}>
      <LiveProvider
        className={styles.playgroundLive}
        code={children.props.children}
        scope={scope}
        mountStylesheet={false}
      >
        <LivePreview className={styles.playgroundPreview} />
        <LiveEditor className="hj-markdown-pre" />
        <LiveError className={styles.playgroundError} />
      </LiveProvider>
    </section>
  )
}

export default Playground
