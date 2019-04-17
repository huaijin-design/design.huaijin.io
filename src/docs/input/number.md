---
chinese: 数字
english: number
order: 7
desc: 数字状态
---

```jsx
() => {
  const [value, setValue] = React.useState('')
  return (
    <Input
      value={value}
      onChange={setValue}
      label='number'
      number={true}
    />
  )
}
```