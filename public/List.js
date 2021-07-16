export class Carousel {
  constructor () {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }
  populate(nodes) {
    for (let i = nodes.length; i--; this.dataStore.unshift(nodes[i]));
    this.listSize = this.dataStore.length
    this.show()
  }
  show() {
    this.dataStore[this.pos] ? this.dataStore[this.pos].style.display = 'inline' : null;
  }
  increment() {
    this.pos ++
    this.hidePrev()
    this.show()
  }
  decrement() {
    this.pos --
    this.hideLast()
    this.show()
  }
  find(element) {
    return this.dataStore.findIndex(item => item == element)
  }
  prev(){
    return this.hasPrev() ? this.decrement() : null
  }
  next(){
    return this.hasNext() ? this.increment() : null
  }
  hasNext(){
    return (this.pos >= this.listSize - 1) ? false : true
  }
  hasPrev(){
    return (this.pos <= 0) ? false : true
  }
  hidePrev(){
    this.dataStore[this.pos - 1].style.display = 'none'
  }
  hideLast(){
    this.dataStore[this.pos + 1].style.display = 'none'
  }
}