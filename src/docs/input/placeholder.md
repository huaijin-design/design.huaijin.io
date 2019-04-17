---
chinese: 占位符
english: placeholder
order: 2
desc: 占位符
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='placeholder'
      placeholder='placeholder'
    />
  )
}
```