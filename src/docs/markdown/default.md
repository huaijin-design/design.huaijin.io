---
chinese: 默认
english: default
order: 0
desc: 基于 [`markdown-to-jsx`](https://github.com/probablyup/markdown-to-jsx)
---

```jsx
<Markdown>
  {`
  # H1
  ## H2
  ### H3

  **bold text**

  *italicized text*

  > blockquote

  - First item
  - Second item
  - Third item

  \`code\`

  ---

  [title](https://huaijin.io)

  ![alt text](/static/logo.png)

  | Syntax | Description |
  | ----------- | ----------- |
  | Header | Title |
  | Paragraph | Text |

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  Here's a sentence with a footnote. [^1]

  [^1]: This is the footnote.

  ~~The world is flat.~~

  - [x] Write the press release
  - [ ] Update the website
  - [ ] Contact the media
  `}
</Markdown>
```