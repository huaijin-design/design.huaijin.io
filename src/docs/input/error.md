---
chinese: 错误
english: error
order: 3
desc: 错误状态
---

```jsx
() => {
  const [value, setValue] = React.useState('hello world')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='error'
      error={true}
    />
  )
}
```