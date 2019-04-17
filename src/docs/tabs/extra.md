---
chinese: 额外内容
english: extra
order: 1
desc: 额外的内容
---

```jsx
() => {
  const [tab, setTab] = React.useState('tab1')
  const extra = <Button size='small'>extra</Button>
  return (
    <Tabs
      value={tab}
      onChange={setTab}
      extra={extra}
    >
      <Tabs.Tab label='tab1' value='tab1'>tab1 content</Tabs.Tab>
      <Tabs.Tab label='tab22' value='tab2'>tab2 content</Tabs.Tab>
      <Tabs.Tab label='tab333' value='tab3'>tab3 content</Tabs.Tab>
    </Tabs>
  )
}
```