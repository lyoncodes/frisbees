import { BuildCarousel } from './helpers/defineNode.js'

const Data = {
  name: 'm-carousel',
  id: 'm-carousel',
  html: `
    <div class="carousel">
      <img src="./courtyard.jpg" style="display: none">
      <img src="./nice-house.jpg" style="display: none">
      <img src="./sub-house.jpg" style="display: none">
    </div>

    <button class="prev">prev</button>
    <button class="next">next</button>
    <link rel="stylesheet" href="./style.css">
  `,
  type: 'template'
}

BuildCarousel(Data)