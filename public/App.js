function App(req, res){
  res.render('index', { Data })
}

function Form(req, res){
  res.render('form', { Data })
}

const Data = {
  footer: {
    fTel: "(360)485-3711",
    fEmail: "bengaubert@greenerealty.com",
    fTrade: "© Made by Michael",
    html_valid: {
      text: "HTML Diagnostics",
      url: "https://validator.w3.org/nu/?doc=https%3A%2F%2Fpreviousunwelcomesearchservice.lyoncodes.repl.co%2F"
    },
    CSS_valid: {
      text: "CSS Check",
      url: "https://jigsaw.w3.org/css-validator/validator?uri=https://previousunwelcomesearchservice.lyoncodes.repl.co/"
    },
    disclaimer: {
      text: "disclaimer",
      url: "https://docs.google.com/document/d/1C9ncBt9n0SlBUoNZJ_YMNIYP1WayiwMrGITuZ-leySo/edit?usp=sharing"
    }
  },
  frisbees: [
    {
      title: "Discover Beautiful Olympia, Washington",
      content_text: "Distinct natural beauty and a vibrant community make Olympia an amazing place to call home. No matter what your path or where you're from, I can help achieve your real estate goals with confidence and peace of mind. I'm proud to offer Thurston County brokerage services rooted in trust and transparency, putting my clients first from start to finish",
      btn: {
        btn_text: "Contact Me",
        btn_href: "/form"
      },
      i_row: [
        {
          logo_src: './assets/graphics/fb-greene.svg',
          href: 'https://www.facebook.com/GreeneRealty/'
        },
        {
          logo_src: './assets/graphics/fb-greene.svg',
          href: 'https://www.facebook.com/GreeneRealty/'
        },
        {
          logo_src: './assets/graphics/fb-greene.svg',
          href: 'https://www.facebook.com/GreeneRealty/'
        }
      ],
      carousel_slug: true
    },
    {
      title: "Why I Love Thurston County Real Estate",
      content_text: "Our community provides endless joy, with access to some of the world's best outdoor activities. When I'm not assisting clients, you'll find me spending time with my wife and dog, fly fishing our abundant local waters, or cooking food for friends",
      img_slug: "bg-portrait.jpg"
    },
    {
      title: "Quality Services",
      content_text: "",
      u_lists: [
        {
          l_title: "For Buyers",
          l_items: [
            "Detailed market knowledge to guide your search for the right home or property",
            "Negotiation skills to help put your most competitive offers forward",
            "Experienced assistance in navigating inspection, financing, and closing"
          ],
        },
        {
          l_title: "For Sellers",
          l_items: [
            "Professional photography and a detailed marketing strategy for maximizing your home's visability" ,
            "Open-house events to generate enthusiasm and interest in your property",
            "Negotiating the bottom line to maximize your ROI and attract the most competitive offers"
          ],
        }
      ]
    }
  ]
}
module.exports = {
  App,
  Form
}