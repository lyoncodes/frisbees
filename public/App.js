 function App(req, res){
  res.render('index', { Data })
}

const Data = {
  content: {
    title: "Discover Beautiful Olympia, WA",
    title1: "I'm proud to call Olympia home.",
    title2: "Quality Services",
    p1: "Distinct natural beauty and a vibrant community make Olympia an amazing place to call home. No matter what your path or where you're from, I can help achieve your real estate goals with confidence and peace of mind. I'm proud to offer Thurston County brokerage services rooted in trust and transparency, putting my clients first from start to finish.",
    p2: "Our community provides endless joy, with access to some of the world's best outdoor activities. When I'm not assisting clients, you'll find me spending time with my wife and dog, fly fishing our abundant local waters, or cooking food for friends.",
    btn1: "Contact Me",
    fTel: "(360)485-3711",
    fEmail: "bengaubert@greenerealty.com",
    fTrade: "© Made by Michael",
    lists: [
      {
        title: 'For Buyers',
        items: [
          "Detailed market knowledge to guide your search for the right home or property.",
          "Negotiation skills to help put your most competitive offers forward.",
          "Experienced assistance in navigating inspection, financing, and closing"
        ]
      },
      {
        title: 'For Sellers',
        items: [
          "Professional photography and a detailed marketing strategy for maximizing your home's visability." ,
          "Open-house events to generate enthusiasm and interest in your property",
          "Negotiating the bottom line to maximize your ROI and attract the most competitive offers."
        ]
      }
    ],
    listElements: [

    ],
    list: [
      {
        text: "Detailed market knowledge to guide your search for the right home or property."
      },
      {
        text: "Negotiation skills to help put your most competitive offers forward."
      },
      {
        text: "Experienced assistance in navigating inspection, financing, and closing" 
      }
    ],
    list2: [
      {
        text: "Professional photography and a detailed marketing strategy for maximizing your home's visability." 
      },
      {
        text: "Open-house events to generate enthusiasm and interest in your property" 
      },
      {
        text: "Negotiating the bottom line to maximize your ROI and attract the most competitive offers."
      }
    ]
  },
  frisbees: [
    {
      type: "mBlock",
      title: "Discover Beautiful Olympia",
      content_text: "Distinct natural beauty and a vibrant community make Olympia an amazing place to call home. No matter what your path or where you're from, I can help achieve your real estate goals with confidence and peace of mind. I'm proud to offer Thurston County brokerage services rooted in trust and transparency, putting my clients first from start to finish.",
      u_lists: [],
      btn_text: "Contact Me",
      carousel_slug: true
    },
    {
      type: "mBlock",
      title: "I'm proud to call Olympia home.",
      content_text: "Our community provides endless joy, with access to some of the world's best outdoor activities. When I'm not assisting clients, you'll find me spending time with my wife and dog, fly fishing our abundant local waters, or cooking food for friends.",
      u_lists: [],
      btn_text: "",
      img_slug: "bg-portrait.jpg"
    },
    {
      type: "mList",
      title: "Quality Services",
      desc_text: "",
      u_lists: [
        {
          l_title: "For Buyers",
          l_items: [
            "Detailed market knowledge to guide your search for the right home or property.",
            "Negotiation skills to help put your most competitive offers forward.",
            "Experienced assistance in navigating inspection, financing, and closing"
          ],
        },
        {
          l_title: "For Sellers",
          l_items: [
            "Professional photography and a detailed marketing strategy for maximizing your home's visability." ,
            "Open-house events to generate enthusiasm and interest in your property",
            "Negotiating the bottom line to maximize your ROI and attract the most competitive offers."
          ],
        }
      ]
    }
  ]
}
module.exports = {App}