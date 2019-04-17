---
chinese: 默认
english: default
order: 0
desc: 默认用法
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
    />
  )
}
```