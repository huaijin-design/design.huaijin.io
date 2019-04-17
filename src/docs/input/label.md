---
chinese: 标签
english: label
order: 1
desc: 与标签结合使用
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='label'
    />
  )
}
```