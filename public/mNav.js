import { BuildList } from './helpers/defineNode.js'
const Data = {
  name: 'm-nav',
  id: 'test',
  type: 'ul',
  dataStore: [
    {
      text: 'home',
      href: '#home'
    },
    {
      text: 'services',
      href: '#services'
    },
    {
      text: 'listings',
      href: 'https://www.greenerealty.com/agents/46583-ben-gaubert'
    },
    {
      text: 'Meet Ben',
      href: '#ben'
    },
    {
      text: 'Contact',
      href: 'https://www.greenerealty.com/agents/46583-ben-gaubert'
    }
  ],
}
BuildList(Data)