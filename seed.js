require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const SubCategory = require('./models/subCategory');
const Item = require('./models/item');


(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Pins', sortOrder: 10},
    // {name: 'Stickers', sortOrder: 20},
    // {name: 'Patches', sortOrder: 30},
    // {name: 'Wooden Items', sortOrder: 40},
  ]);

  await SubCategory.deleteMany({});
  const subCategories = await SubCategory.create([
    {name: 'Words & Phrases', category: categories[0]._id},
    {name: 'Music', category: categories[0]._id},
    {name: 'LatinX', category: categories[0]._id},
    // {name: 'Sororities', category: categories[0]._id},
    // {name: 'Keychains', category: categories[3]._id},
    // {name: 'Magnets', category: categories[3]._id},
    // {name: 'Ornaments', category: categories[3]._id},
    // {name: 'Signs', category: categories[3]._id},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "Maktub Pin",
      price: 12,
      color_variants: ["red", "black"],
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/maktub-black.jpg",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/maktub-red.png"
    },
    
    {
      name: "Daughter of an Immigrant Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: [subCategories[0]._id, subCategories[2]._id],
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/daughter-of-an-immigrant.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/daughter-of-an-immigrant-back.JPG"
    },
    {
      name: "Grito de Lares Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: subCategories[2]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/grito-de-lares.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/grito-de-lares-back.JPG"
    },
    {
      name: "The Diplomats Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/diplomats.png",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/diplomats-back.png"
    },
    {
      name: "Dreamville Pin",
      price: 12,
      color_variants: ["NC blue", "black & white"],
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/dreamville-nc-blue.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/dreamville-back-2.JPG"
    },
    {
      name: "Phenomenal Woman Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/phenomenal-woman.png",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/phenomenal-woman-2.png"
    },
    {
      name: "Latina in Tech Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: [subCategories[2]._id, subCategories[0]._id],
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/latina-in-tech.jpeg",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/in-tech-back.JPG"
    },
    {
      name: "Black in Tech Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: [subCategories[2]._id, subCategories[0]._id],
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/black-in-tech.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/in-tech-back.JPG"
    },
    {
      name: "Wildest Dreams Pin",
      price: 12,
      color_variants: ["silver", "gold"],
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/wildest-dreams-gold.png",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/wildest-dreams-silver.png"
    },
    {
      name: "Ruff Ryders Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/ruff-ryders.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/ruff-ryders-back.JPG"
    },
    {
      name: "Knuck If You Buck Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: subCategories[1]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/knuck-if-you-buck.png",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/knuck-if-you-buck-2.png"
    },
    {
      name: "SNKRS Got'Em Pin",
      price: 12,
      category: categories[0]._id,
      subCategory: subCategories[0]._id,
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/got-em.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/got-em-back.JPG"
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
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/menos-hate.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/menos-hate-back.JPG"
    },
    {
      name: "No me Jodas Pin",
      price: 12,
      color_variants: ["rose gold", "black & gold"],
      category: categories[0]._id,
      subCategory: [subCategories[2]._id, subCategories[0]._id],
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/no-me-jodas-rose-gold.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/no-me-jodas-rose-gold-back.JPG"
    },
    {
      name: "Ojala Pin",
      price: 12,
      color_variants: ["rose gold", "black & white"],
      category: categories[0]._id,
      subCategory: [subCategories[2]._id, subCategories[0]._id],
      photo_cover: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/ojala-black.JPG",
      photo_1: "https://the-pintern.s3.us-east-2.amazonaws.com/pins/ojala-back.JPG"
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
  ]);

  console.log(items)

  process.exit();

})();
