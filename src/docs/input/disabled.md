---
chinese: 禁用
english: disabled
order: 5
desc: 禁用状态
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='disabled'
      disabled={true}
    />
  )
}
```