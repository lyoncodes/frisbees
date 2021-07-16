function App(req, res){
  res.render('index', { Data })
}

const Data = {
  t1: "Discover Beautiful Olympia, WA",
  t2: "I'm proud to call Olympia home.",
  t3: "Quality Services",
  t4: "For Buyers",
  t5: "For Sellers",
  p1: "Distinct natural beauty and a vibrant community make Olympia an amazing place to call home. No matter what your path or where you're from, I can help achieve your real estate goals with confidence and peace of mind. I'm proud to offer Thurston County brokerage services rooted in trust and transparency, putting my clients first from start to finish.",
  p2: "Our community provides endless joy, with access to some of the world's best outdoor activities. When I'm not assisting clients, you'll find me spending time with my wife and dog, fly fishing our abundant local waters, or cooking food for friends.",
  lc1: "Detailed market knowledge to guide your search for the right home or property.",
  lc2: "Negotiation skills to help put your most competitive offers forward.",
  lc3: "Experienced assistance in navigating inspection, financing, and closing.",
  lc4: "Professional photography and a detailed marketing strategy for maximizing your home's visability.",
  lc5: "Open-house events to generate enthusiasm and interest in your property.",
  lc6: "Negotiating the bottom line to maximize your ROI and attract the most competitive offers.",
  bt1: "Contact Me",
  fTel: "(360)485-3711",
  fEmail: "bengaubert@greenerealty.com",
  fTrade: "© Made by Michael",
}
module.exports = {App}