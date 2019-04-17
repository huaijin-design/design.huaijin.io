---
chinese: 默认
english: default
order: 0
desc: 默认用法
---

```jsx
() => {
  const [tab, setTab] = React.useState('tab1')
  return (
    <Tabs
      value={tab}
      onChange={setTab}
    >
      <Tabs.Tab label='tab1' value='tab1'>tab1 content</Tabs.Tab>
      <Tabs.Tab label='tab22' value='tab2'>tab2 content</Tabs.Tab>
      <Tabs.Tab label='tab333' value='tab3'>tab3 content</Tabs.Tab>
    </Tabs>
  )
}
```