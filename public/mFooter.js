import { BuildTemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-footer',
  id: 'm-footer',
  html: `
    <div>
      <span id='title'></span>
      <div><slot name="tel"/></div>
      <div><slot name="email"/></div>
      <div><slot name="trademark"/></div>
    </div>
    <link rel="stylesheet" href="./style.css">
    `,
  type: 'template'
}
BuildTemplateNode(Data)