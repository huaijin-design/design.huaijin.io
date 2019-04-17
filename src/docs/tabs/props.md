## Props

### Tabs

| props    | description                | type                           | default | required |
| -------- | -------------------------- | ------------------------------ | ------ | -------- |
| value    | 当前激活 `tab` 面板的 value | string/number                  | -      | true     |
| onChange | 切换 `tab` 的回调           | (value: string/number) => void | -      | true     |
| extra    | `tabbar` 上额外的元素       | React.ReactNode                | -      | false     |

### Tabs.Tab

| props | description    | type                   | default | required |
| ----- | -------------- | ---------------------- | ------- | -------- |
| label | 选项卡头显示文字 | string/React.ReactNode | -      | true     |
| value | 对应的 value    | string/number          | -      | true     |
