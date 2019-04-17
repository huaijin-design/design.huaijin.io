---
chinese:  密码
english: password
order: 6
desc: 密码状态
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='password'
      password={true}
    />
  )
}
```