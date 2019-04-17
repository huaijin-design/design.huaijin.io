---
chinese: 组件覆盖
english: overrides
order: 1
desc: 通过修改 overrides 渲染 markdown 内的 JSX。
---

请确保 markdown 字符串前后无多余空格，多余空格可能会导致渲染不符合预期。

```jsx
() => {
  function MyComponent() {
    return (
      <h1>hello huaijin!</h1>
    )
  }
  return (
    <Markdown overrides={{
      MyComponent: {
        component: MyComponent
      }
    }}>
{`
# H1
## H2
### H3

<MyComponent />
`}
    </Markdown>
  )
}
```