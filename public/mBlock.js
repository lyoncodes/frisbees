import { TemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-block',
  id: 'm-block',
  html: `
    <div>
      <h1><slot name="title" /></h1>
    </div>
    <div>
      <p id='text-block'><slot name="textBlock" /></p>
    </div>
    <div>
      <p id='text-block'><slot name="textBlock" /></p>
    </div>
    <link rel="stylesheet" href="./style.css">
    `,
  type: 'template'
}
TemplateNode(Data)