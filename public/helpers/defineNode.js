// @lyoncodes, Meanxael, Lyon Creative LLC. 2021
// defineNodes.js
import { Carousel } from '../List.js'
// =============================================
function defineNodeAttribute (node, attr, src) {
  let link = document.createAttribute(attr)
  link.value = src
  node.setAttributeNode(link)
}

function nodeId (type, node, DOMId, idx, el) {
  let id = document.createAttribute('id')
  id.value = `${DOMId}${idx + 1}`
  node.setAttributeNode(id)

  type === 'a' ? defineNodeAttribute(node, 'href', el.href) : defineNodeAttribute(node, 'style', 'display: none')
}

function newNode (type, DOMId, el, idx) {
  let node = document.createElement(type)
  nodeId(type, node, DOMId, idx, el)
  return { node }
}

function newTemplate (type, html) {
  const template = document.createElement(type);
  template.innerHTML = html
  return template
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

export function BuildCarousel(obj) {
  const template = newTemplate(obj.type, obj.html)
  const carousel = new Carousel()

  class CarouselComponent extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      const DOMref = this.shadowRoot.querySelector('.carousel')

      let mlist = []
      
      obj.carousel_data.forEach((el, idx) => { 
        mlist.push(newNode('div','carousel-item', el, idx))
      })

      mlist.forEach((el, idx) => {
        let img = document.createElement('img')
        let review = document.createElement('p')
        
        img.src = obj.carousel_data[idx].src
        review.innerText = obj.carousel_data[idx].text
        
        el.node.appendChild(img)
        el.node.appendChild(review)
      })

      mlist.forEach(el => DOMref.appendChild(el.node))
      const nlist = DOMref.querySelectorAll('div')
      
      carousel.populate(nlist)

      this.shadowRoot.querySelector('.prev').addEventListener('click', () => carousel.prev());
      this.shadowRoot.querySelector('.next').addEventListener('click', () => carousel.next());
      this.shadowRoot.querySelector('.pause').addEventListener('click', () => clearInterval(cycle));

      // let cycle = setInterval(() => { carousel.next(); }, 1000)

    }
  }

  customElements.define(`${obj.name}`, CarouselComponent)
}

export function BuildNav(obj){
  const template = newTemplate(obj.type, obj.html)
  
  class NavTemplate extends HTMLElement {
    constructor() {
      super();
      
      this.attachShadow({mode: 'open'})
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      const DOMref = this.shadowRoot.querySelector('.navigation-menu')

      let nlist = []

      obj.navigation.forEach((el, idx) => {
        nlist.push(newNode('a', 'nav-link', el, idx))
      })
      nlist.forEach((el, idx) => { 
        el.node.innerText = obj.navigation[idx].text
      })
      nlist.forEach(el => DOMref.appendChild(el.node))
    }
  }

  customElements.define(`${obj.name}`, NavTemplate)
}