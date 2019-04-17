import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { Location } from "@reach/router"
import styles from "./styles.module.sass"

const navContent = [
  { label: "Button", desc: "按钮", url: "button" },
  { label: "Input", desc: "输入框", url: "input" },
  { label: "Figure", desc: "插图", url: "figure" },
  { label: "Tabs", desc: "标签页", url: "tabs" },
  { label: "Markdown", desc: "markdown", url: "markdown" },
]

const Slide = () => (
  <aside className={styles.sidebar}>
    <div className={styles.sidebarTitle}>Components</div>
    <div className={styles.sidebarNav}>
      <div>
        {navContent.map(v => (
          <Link
            className={styles.sidebarNavItem}
            key={v.label}
            to={`/components/${v.url}`}
            activeClassName={styles.sidebarNavItemSelected}
            state={{ component: v.url }}
          >
            {v.label}
            <span className={styles.sidebarNavItemTitleZh}>{v.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  </aside>
)

export default Slide
