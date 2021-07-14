import { BuildTemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-button',
  id: 'm-button',
  html: `
    <button><slot /></button>
    <link rel="stylesheet" href="./style.css">
    `,
  type: 'template'
}
BuildTemplateNode(Data)