// @lyoncodes, Meanxael, Lyon Creative LLC. 2021
// defineNodes.js
import { Carousel } from '../List.js'
// =============================================
function nodeSrc (node, src) {
  let link = document.createAttribute('href')
  link.value = src
  node.setAttributeNode(link)
}

function nodeId (type, node, DOMId, idx, el) {
  let id = document.createAttribute('id')
  id.value = `${DOMId}${idx + 1}`
  node.setAttributeNode(id)

  type = 'a' ? nodeSrc(node, el.href) : null
}

function newNode (type, DOMId, el, idx) {
  let node = document.createElement(type)
  let nodeData = document.createTextNode(el.text)
  nodeData ? node.appendChild(nodeData) : null
  nodeId(type, node, DOMId, idx, el)
  return { node }
}

function newTemplate (type, html) {
  const template = document.createElement(type);
  template.innerHTML = html
  return template
}

function createShadow (self, modeType) {
  let shadow = self.attachShadow({mode: `${modeType}`})
  return shadow
}

export function TemplateNode (obj) {
  const template = newTemplate(obj.type, obj.html)
  
  class BlockComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open'})

      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }

  customElements.define(`${obj.name}`, BlockComponent)
}

export function defineAttribute (obj) {
  let node = document.createElement(obj.type)
  let nodeData = document.createAttribute('src')
  nodeData.value = obj.src
  node.setAttributeNode(nodeData)
}

export function BuildCarousel(obj) {
  const template = newTemplate(obj.type, obj.html)
  const carousel = new Carousel()

  class CarouselComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      
      const DOMref = this.shadowRoot.querySelector('.carousel')
      const nlist = DOMref.querySelectorAll('img')
      
      carousel.populate(nlist)

      this.shadowRoot.querySelector('.prev').addEventListener('click', () => carousel.prev());
      this.shadowRoot.querySelector('.next').addEventListener('click', () => carousel.next());
      this.shadowRoot.querySelector('.pause').addEventListener('click', () => {
        clearInterval(timer)
      });

      let timer = setInterval(() => { carousel.next(); }, 3000)

    }
  }

  customElements.define(`${obj.name}`, CarouselComponent)
}

export function BuildList (data) {
  class ListComponent extends HTMLElement {
    constructor() {
      self = super()
      let shadow = createShadow(self, 'open')

      data.dataStore.forEach((el, idx) => {
        let link = newNode(data.type, data.id, el, idx)
        
        shadow.appendChild(link.node)
      })

    }
  }

  customElements.define(`${data.name}`, ListComponent)
}