import { BuildNav } from '../helpers/defineNode.js'
const Data = {
  name: 'nav-bar',
  id: 'nav-bar',
  html: `
    <div id="nav" class="row m-container m-end navigation-menu sticky plane">
    </div>
    <link rel="stylesheet" href="./styles/style.css">
    `,
  type: 'template',
  navigation: [
    {
      text: 'Home',
      href: '#home'
    },
    {
      text: 'Listings',
      href: 'https://www.greenerealty.com/agents/46583-ben-gaubert'
    },
    {
      text: 'Meet Ben',
      href: '#ben'
    },
    {
      text: 'Mobile',
      href: ''
    }
  ]
}
BuildNav(Data)