// @lyoncodes, Meanxael, Lyon Creative LLC. 2021
// defineNodes.js
import { Carousel } from '../List.js'
// =============================================
function newNode (type, DOMId, el, idx) {
  // create node
  let node = document.createElement(type)
  // check if newly created node is an IMG or Plain Obj
  let nodeData = node.nodeName === 'IMG' ? document.createAttribute('src') : document.createTextNode(el.text)
  // If it's an image, assign the path stored in el argument
  node.nodeName === 'IMG' ? nodeData.value = el : null
  // conditionally check the node data in order to perform the right appendage
  nodeData.value ? node.setAttributeNode(nodeData) : node.appendChild(nodeData)
  // assign node a unique id & return it
  nodeId(node, DOMId, idx)
  return { node }
}

function nodeId (node, DOMId, idx) {
  let id = document.createAttribute('id')
  id.value = `${DOMId}${idx + 1}`
  node.setAttributeNode(id)
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

// export function ImgNode (data) {
//   class NewNode extends HTMLElement {
//     constructor () {
//       self = super()
//       let shadow = createShadow(self, 'open')

//       let element = newNode(data.type, data.id, data.text, 0)
//       shadow.appendChild(element.node)
//     }
//   }
//   customElements.define(`${data.name}`, NewNode)
// }

export function TemplateNode (obj) {
  const template = newTemplate(obj.type, obj.html)
  
  class NewTemp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open'})

      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }

  customElements.define(`${obj.name}`, NewTemp)
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

      setInterval(() => { carousel.next(); }, 6000)
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
        let element = newNode(data.type, data.id, el, idx)
        shadow.appendChild(element.node)
      })

    }
  }

  customElements.define(`${data.name}`, ListComponent)
}