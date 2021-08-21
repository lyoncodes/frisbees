import { TemplateNode } from './helpers/defineNode.js'
const Data = {
  name: 'm-text-block',
  id: 'm-text-block',
  html: `
    <div>
      <p id='content'><slot /></p>
    </div>
    <link rel="stylesheet" href="./styles/style.css">
    `,
  type: 'template'
}
TemplateNode(Data)