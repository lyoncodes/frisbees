import { TemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-text',
  id: 'm-text',
  html: `
    <div>
      <span id='title'></span>
      <div><slot /></div>
    </div>
    <link rel="stylesheet" href="./style.css">
    `,
  type: 'template'
}
TemplateNode(Data)