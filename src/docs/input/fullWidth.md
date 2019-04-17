---
chinese: 一行
english: fullWidth
order: 9
desc: 占满一行宽度
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <>
      <Input
        value={value}
        onChange={setValue}
        label='fullWidth'
        fullWidth={true}
      />
      <Input
        value={value}
        onChange={setValue}
        label='fullWidth'
        multiline={true}
        rows={4}
        fullWidth={true}
      />
    </>
  )
}
```