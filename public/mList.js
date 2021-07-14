import { BuildTemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-list',
  id: 'm-list',
  html: `
    <div>
      <span id='title'></span>
      <ul>
        <li><slot name="1"/></li>
        <li><slot name="2"/></li>
        <li><slot name="3"/></li>
      </ul>
    </div>
    <link rel="stylesheet" href="./style.css">
    `,
  type: 'template'
}
BuildTemplateNode(Data)