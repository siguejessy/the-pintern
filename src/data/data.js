const categories = [
  { name: "Pins", sortOrder: 10 },
  { name: "Stickers", sortOrder: 20 },
  { name: "Patches", sortOrder: 30 },
  { name: "Wooden Items", sortOrder: 40 },
];

const subCategories = [
  { name: "Words & Phrases", category: categories[0]._id },
  { name: "Music", category: categories[0]._id },
  { name: "LatinX", category: categories[0]._id },
  { name: "Sororities", category: categories[0]._id },
  { name: "Keychains", category: categories[3]._id },
  { name: "Magnets", category: categories[3]._id },
  { name: "Ornaments", category: categories[3]._id },
  { name: "Signs", category: categories[3]._id },
];

const items = [
  {
    name: "Maktub Pin",
    price: 12,
    color_variants: ["red", "black"],
    category: categories[0]._id,
    subCategory: subCategories[0]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/maktub-black.jpg"
  },

  {
    name: "Daughter of an Immigrant Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: [subCategories[0]._id, subCategories[2]._id],
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/daughter-of-an-immigrant.JPG"
  },
  {
    name: "Grito de Lares Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: subCategories[2]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/grito-de-lares.JPG"
  },
  {
    name: "The Diplomats Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: subCategories[1]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/diplomats.png"
  },
  {
    name: "Dreamville Pin",
    price: 12,
    color_variants: ["NC blue", "black & white"],
    category: categories[0]._id,
    subCategory: subCategories[1]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/dreamville-nc-blue.JPG"
  },
  {
    name: "Phenomenal Woman Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: subCategories[0]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/phenomenal-woman.png"
  },
  {
    name: "Latina in Tech Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: [subCategories[2]._id, subCategories[0]._id],
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/latina-in-tech.jpeg"
  },
  {
    name: "Black in Tech Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: [subCategories[2]._id, subCategories[0]._id],
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/black-in-tech.JPG"
  },
  {
    name: "Wildest Dreams Pin",
    price: 12,
    color_variants: ["silver", "gold"],
    category: categories[0]._id,
    subCategory: subCategories[0]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/wildest-dreams-gold.png"
  },
  {
    name: "Ruff Ryders Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: subCategories[1]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/ruff-ryders.JPG"
  },
  {
    name: "Knuck If You Buck Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: subCategories[1]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/knuck-if-you-buck.png"
  },
  {
    name: "SNKRS Got'Em Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: subCategories[0]._id,
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/got-em.JPG"
  },
  {
    name: "Menos Hate, Mas Perreo Pin",
    price: 12,
    category: categories[0]._id,
    subCategory: [
      subCategories[2]._id,
      subCategories[0]._id,
      subCategories[1]._id,
    ],
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/menos-hate.JPG"
  },
  {
    name: "No me Jodas Pin",
    price: 12,
    color_variants: ["rose gold", "black & gold"],
    category: categories[0]._id,
    subCategory: [subCategories[2]._id, subCategories[0]._id],
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/no-me-jodas-rose-gold.JPG"
  },
  {
    name: "Ojala Pin",
    price: 12,
    color_variants: ["rose gold", "black & white"],
    category: categories[0]._id,
    subCategory: [subCategories[2]._id, subCategories[0]._id],
    photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/ojala-black.JPG"
  },
  // {
  //   name: "OPBSI Diversity Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  //   photo_cover: ""
  // },
  // {
  //   name: "OPBSI Varsity Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "OPBSI Hummingbird Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LTA Moon Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LTA Letters Pin",
  //   price: 12,
  //   color_variants: ["grey on burgundy", "burgundy on grey"],
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LTA Block Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LPiU Year Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LPiU Founders Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LPiU Letters Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LPiU Diva Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
  // {
  //   name: "LPiU CADyO Pin",
  //   price: 12,
  //   category: categories[0]._id,
  //   subCategory: subCategories[3]._id,
  // },
];

module.exports = { categories, subCategories, items };