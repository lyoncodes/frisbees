import { BuildCarousel } from './helpers/defineNode.js'

const Data = {
  name: 'm-carousel',
  id: 'm-carousel',
  html: `
    <button class="prev">prev</button>
    <div class="carousel">
      <img src="./assets/imgs/courtyard.jpg" style="display: none">
      <img src="./assets/imgs/nice-house.jpg" style="display: none">
      <img src="./assets/imgs/sub-house.jpg" style="display: none">
    </div>
    <button class="next">next</button>
    <link rel="stylesheet" href="./style.css">
  `,
  type: 'template'
}

BuildCarousel(Data)