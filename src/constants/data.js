import images from "./images";

const specials = [
  {
    title: "Borscht",
    price: "$13",
    tags: "Ukrainian beetroot soup with beef served with sour cream, croutons & salo",
  },
  {
    title: "Salo bliss",
    price: "$13",
    tags: "Two types of salo (lard), pickles, baby potato with herbs & garlic",
  },
  {
    title: "Varenyky",
    price: "$14",
    tags: "Dumplings with potato, fried onions, sour cream",
  },
  {
    title: "Varenyky with chicken and beef",
    price: "$14",
    tags: "Mini dumplings with chicken and beef, sour cream, vinegar",
  },
  {
    title: "Solianka",
    price: "$13",
    tags: "Rich meat soup, served with bread and sour cream",
  },
];

const mains = [
  {
    title: "Banush",
    price: "$14",
    tags: "Polenta, cheese, crispy fried bacon",
  },
  {
    title: "Chicken kyiv",
    price: "$16",
    tags: "Served with mush potato",
  },
  {
    title: "Sea dream",
    price: "$16",
    tags: "Grilled sea bass fillet with sautéed vegetables",
  },
  {
    title: "Duck leg with cranbery souce",
    price: "$17",
    tags: "Served with mush potato",
  },
  {
    title: "Deruny",
    price: "$13",
    tags: "Potato pancake, sour cream, mushrooms sauce",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Celebrating excellence in flavour and value.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Honouring innovation and creativity in the kitchen.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Recognised for warm service and authentic dining experiences.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Awarded for culinary passion and dedication to craft.",
  },
];

const data = { specials, mains, awards };

export default data;
