import { BuildCarousel } from './helpers/defineNode.js'

const Data = {
  name: 'm-carousel',
  id: 'm-carousel',
  html: `
    <div class="mb-1">
      <button class="c-btn prev"><</button>
      <div class="carousel">
      </div>
      <button class="c-btn next">></button>
    </div>
    <link rel="stylesheet" href="./styles/style.css">
  `,
  type: 'template',
  carousel_data: [
    {
      src: './assets/imgs/nice-house.jpg',
      text: '"We feel so lucky to have found Ben. His patience, strong network, hard-work and clear guidance were invaluable in helping us purchase our first home in an intimidating seller\'s market. Throughout the process, he was understanding, communicative, dependable, and we never felt pressured or rushed into making any decisions. We feel so lucky to have found Ben."'
    },
    {
      src: './assets/imgs/sub-house.jpg',
      text: '"Ben was an amazing agent for us. He knew the area very well and went above and beyond on helping us sell our house. He was extremely communicative, which was especially helpful for us because we live out of town. He dropped everything multiple times to answer our questions or requests. He is positive and energetic, and we loved his personality!"',
    },
    {
      src: './assets/imgs/courtyard.jpg',
      text: '"Ben gave us sound advice. Whenever a problem arose with the preparation and marketing of our home, Ben was on top of it with a \'can-do\' and enthusiastic plan. At our first meeting, Ben got out of his car and saved my wife and me $10,000. Would I recommend Ben to friends or family? darn tootin! If I were trying to buy a house in Olympia, Ben would be my agent!"',
    },
    {
      src: './assets/imgs/kitchen-island.jpeg',
      text: '"Ben is awesome - he has helped me buy and sell 2 homes in Olympia and Ocean Shores. His in-depth knowledge of the South Sound makes him an invaluable resource He\'s a negotiation pro and goes above and beyond in every way  - including helping to relocate a massive antique stove, making the trek out to the beach,and navigating details of a house sale and purchase!"',
    },
    {
      src: './assets/imgs/backyard.jpeg',
      text: '"We were lucky to find Ben for our first home. He was always available when we wanted to see a home even if it was last minute. He is extremely knowledgeable on building practices and products which was comforting as first time home buyers. If you\'re looking for someone who is respectful, knowledgeable and fun to be around, Ben is the right person for you."',
    }
  ]
}

BuildCarousel(Data)