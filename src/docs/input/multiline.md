---
chinese: 多行输入
english: multiline
order: 8
desc: 多行输入状态
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='multiline'
      multiline={true}
      rows={4}
    />
  )
}
```