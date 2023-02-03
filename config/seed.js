require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'American', sortOrder: 10},
    {name: 'South American', sortOrder: 20},
    {name: 'European', sortOrder: 30},
    {name: 'African', sortOrder: 40},
    {name: 'Indonesian', sortOrder: 50},
    {name: 'Caribbean', sortOrder: 60},
    {name: 'Arabica', sortOrder: 70},
    {name: 'Robusta', sortOrder: 80},
    {name: 'Most Popular', sortOrder: 90},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Tropical Weather - Single Origin', emoji: '🇺🇸', category: categories[0], price: 2.95},
    {name: 'The Chronic - Single Origin', emoji: '🇺🇸', category: categories[0], price: 3.95},
    {name: 'Upland Blend - Blend', emoji: '🇺🇸', category: categories[0], price: 1.95},
    {name: 'Juan Valdez - Blend', emoji: '🇨🇴', category: categories[1], price: 2.95},
    {name: 'Pilão - Single Origin', emoji: '🇧🇷', category: categories[1], price: 3.95},
    {name: 'Café Aguila Roja - Blend', emoji: '🇨🇴', category: categories[1], price: 2.95},
    {name: 'Lavazza - Single Origin', emoji: '🇮🇹', category: categories[2], price: 2.95},
    {name: 'Illy - Single Origin', emoji: '🇮🇹', category: categories[2], price: 2.95},
    {name: 'Pellini - Single Origin', emoji: '🇮🇹', category: categories[2], price: 3.95},
    {name: 'Yirgacheffe - Blend', emoji: '🇪🇹', category: categories[3], price: 2.95},
    {name: 'Congo Kivu - Blend', emoji: '🇨🇬', category: categories[3], price: 2.95},
    {name: 'Kavugangoma - Single Origin', emoji: '🇪🇹', category: categories[3], price: 3.95},
    {name: 'Sumatra Gayo - Single Origin', emoji: '🇮🇩', category: categories[4], price: 2.95},
    {name: 'Bali Blue Moon - Single Origin', emoji: '🇮🇩', category: categories[4], price: 3.95},
    {name: 'Sumatra Mandheling - Blend', emoji: '🇮🇩', category: categories[4], price: 1.95},
    {name: 'Cafe La Llave - Blend', emoji: '🇨🇺', category: categories[5], price: 1.95},
    {name: 'La Rubia Cubana - Blend', emoji: '🇨🇺', category: categories[5], price: 1.95},
    {name: 'Cafe Santo Domingo - Blend', emoji: '🇩🇴', category: categories[5], price: 2.95},
    {name: 'Cafe La Carreta - Blend', emoji: '🇨🇺', category: categories[5], price: 1.95},
    {name: 'Blue Mountain - Single Origin', emoji: '🇯🇲', category: categories[6], price: 2.95},
    {name: 'Arditti Caffe - Single Origin', emoji: '🇮🇹', category: categories[6], price: 2.95},
    {name: 'Estrella del Caribe - Blend', emoji: '🇮🇹', category: categories[6], price: 1.95},
    {name: 'Copper Cow Coffee - Single Origin', emoji: '🇻🇳', category: categories[7], price: 3.95},
    {name: 'Nyugen Coffee - Single Origin', emoji: '🇻🇳', category: categories[7], price: 3.95},
    {name: 'Cannonball Coffee - Single Origin', emoji: '🇻🇳', category: categories[7], price: 2.95}, 
    {name: 'Lavazza - Single Origin', emoji: '🇮🇹', category: categories[8], price: 2.95},
    {name: 'Cafe La Llave - Blend', emoji: '🇨🇺', category: categories[8], price: 1.95},
    {name: 'Bali Blue Moon - Single Origin', emoji: '🇮🇩', category: categories[8], price: 3.95},
  ]);

  console.log(items)

  process.exit();

})();