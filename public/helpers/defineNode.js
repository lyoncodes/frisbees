// @lyoncodes, Meanxael, Lyon Creative LLC. 2021
// defineNodes.js
// =============================================

function newNode (type, DOMId, el, idx) {
  // create node
  let node = document.createElement(type)
  
  // check if newly created node is an IMG or Plain Obj
  let nodeData = node.nodeName === 'IMG' ? document.createAttribute('src') : document.createTextNode(el.text)
  node.nodeName === 'IMG' ? nodeData.value = el : null
  nodeData.value ? node.setAttributeNode(nodeData) : node.appendChild(nodeData)
  
  // assign node a unique id
  nodeId(node, DOMId, idx)
  
  // return newly created node
  return { node }
}

function nodeId (node, DOMId, idx) {
  let id = document.createAttribute('id')
  id.value = `${DOMId}${idx + 1}`
  node.setAttributeNode(id)
}

function createShadow (self, modeType) {
  let shadow = self.attachShadow({mode: `${modeType}`})
  return shadow
}

export function BuildNode (data) {
  class NewNode extends HTMLElement {
    constructor () {
      self = super()
      let shadow = createShadow(self, 'open')

      let element = newNode(data.type, data.id, data.text, 0)
      shadow.appendChild(element.node)
    }
  }
  customElements.define(`${data.name}`, NewNode)
}

export function BuildTemplateNode (obj) {
  const template = document.createElement(obj.type);
  template.innerHTML = obj.html
  
  class NewTemp extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open'})

      this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
  }

  customElements.define(`${obj.name}`, NewTemp)
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