import { TemplateNode } from './helpers/defineNode.js'
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
    <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fpreviousunwelcomesearchservice.lyoncodes.repl.co%2F"><slot name="html_valid"></a>
    <a href="https://jigsaw.w3.org/css-validator/check?uri=referer"><slot name="CSS_valid"></a>
    <a href="https://docs.google.com/document/d/1C9ncBt9n0SlBUoNZJ_YMNIYP1WayiwMrGITuZ-leySo/edit?usp=sharing"><slot name="disclaimer"></a>
    <link rel="stylesheet" href="./styles/style.css">
    `,
  type: 'template'
}
TemplateNode(Data)