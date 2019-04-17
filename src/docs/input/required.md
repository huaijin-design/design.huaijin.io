---
chinese: 必需
english: required
order: 4
desc: 必需的状态
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='required'
      required={true}
    />
  )
}
```