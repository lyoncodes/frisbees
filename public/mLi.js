import { TemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-li',
  id: 'm-li',
  html: `
    <span><slot /></span>
    <link rel="stylesheet" href="./styles/style.css">
    `,
  type: 'template'
}
TemplateNode(Data)