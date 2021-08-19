import { TemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'section-heading',
  id: 'section-heading',
  html: `
    <div>
      <h1><slot name="title" /></h1>
      <p><slot name="textBlock" /></p>
    </div>
    <link rel="stylesheet" href="./style.css">
    `,
  type: 'template'
}
TemplateNode(Data)