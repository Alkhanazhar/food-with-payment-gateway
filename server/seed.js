const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Food = require('./models/Foods');
dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Mongoose")
})

const foods = [
    {
        name: "Misal Pav and Pav Bhaji",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/13-vada-pav-canva-phpFSOPxs",
        description: "The soft bread roll, or pav, is an important element in several Indian street food dishes, including misal pav and pav bhaji. These Maharashtrian street foods consist of a lentil or vegetable curry paired with a roll for dipping the savory, spiced gravies. Both dishes can be found with a wide variety of pairings and presentations. ",
        price: 149,
        category: "indian",
    },
    {
        name: "Kathi Rolls",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/15-kathi-rolls-canva-phpE9mepi",
        description: "Originally from Kolkata in the West Bengal state of India, kathi rolls began as a skewer-roasted kebab wrapped in paratha bread. Modern kathi rolls refer to practically any wrap with a filling folded in an Indian flatbread and containing ingredients such as eggs, chicken, mutton, chutney or chilies. The filled wrap is rolled up in paper for easy eating on the go.",
        price: 249,
        category: "fast-food",
    },
    {
        name: "Sambar",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/21-sambar-canva-php6n3V6O",
        description: "The South Indian lentil-based vegetable stew, sambar, is often cooked with pigeon peas and tamarind broth. The dish is often enjoyed with rice, dosa or idli, a type of savory rice cake made by steaming a fermented batter of rice and lentils.",
        price: 109,
        category: "fast-food",
    },
    {
        name: "Saag",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/31-saag-canva-phpJ2CE1n",
        description: "Saag sets itself apart from other Indian food dishes by eschewing the bright oranges and reds of many Indian curries for a deep, distinctive green provided by its signature ingredient: spinach. Other leafy green vegetables such as fenugreek, mustard greens, collard greens or dill help round out the flavor of the dish. As with other styles of curry, popular versions of saag are made with meat, fish or vegetarian paneer",
        price: 169,
        category: "indian",
    },
    {
        name: "Malai Kofta",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/27-malai-kofta-canva-php4HbTC1",
        description: "This North Indian comfort food is made with kofta, fried potato-paneer dumplings, served in a rich, creamy sauce. The dumplings can come in a variety of sizes with either a lightly colored cream sauce or a spicier orange curry with tomatoes and red chilies.",
        price: 109,
        category: "indian",
    },
    {
        name: "Chana Masala",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/33-chana-masala-canva-phphQcG8p",
        description: "This iconic Indian food is a North Indian curry dish made with white chickpeas simmered in a spiced tomato and onion gravy. This vegetarian dish is commonly enjoyed on its own or soaked up by rice or naan. Dry versions of chana masala (without gravy) are also eaten as a snack or street food.",
        price: 109,
        category: "indian",
    },
    {
        name: "Veg Biryani",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/35-biryani-canva-phpxov0UZ",
        description: "This iconic Indian food is a North Indian curry dish made with white chickpeas simmered in a spiced tomato and onion gravy. This vegetarian dish is commonly enjoyed on its own or soaked up by rice or naan. Dry versions of chana masala (without gravy) are also eaten as a snack or street food.",
        price: 189,
        category: "indian",
    },
    {
        name: "Misal Pav and Pav Bhaji",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/13-vada-pav-canva-phpFSOPxs",
        description: "The soft bread roll, or pav, is an important element in several Indian street food dishes, including misal pav and pav bhaji. These Maharashtrian street foods consist of a lentil or vegetable curry paired with a roll for dipping the savory, spiced gravies. Both dishes can be found with a wide variety of pairings and presentations. ",
        price: 149,
        category: "indian",
    },
    {
        name: "Kathi Rolls",
        image: "https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750,f_auto/15-kathi-rolls-canva-phpE9mepi",
        description: "Originally from Kolkata in the West Bengal state of India, kathi rolls began as a skewer-roasted kebab wrapped in paratha bread. Modern kathi rolls refer to practically any wrap with a filling folded in an Indian flatbread and containing ingredients such as eggs, chicken, mutton, chutney or chilies. The filled wrap is rolled up in paper for easy eating on the go.",
        price: 249,
        category: "fast-food",
    },
    {
        name: "Orea shake",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "The South Indian lentil-based vegetable stew, sambar, is often cooked with pigeon peas and tamarind broth. The dish is often enjoyed with rice, dosa or idli, a type of savory rice cake made by steaming a fermented batter of rice and lentils.",
        price: 189,
        category: "drinks",
    },
    {
        name: "Veg SandWich",
        image: "https://images.unsplash.com/photo-1700768400970-428c50bffc11?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Saag sets itself apart from other Indian food dishes by eschewing the bright oranges and reds of many Indian curries for a deep, distinctive green provided by its signature ingredient: spinach. Other leafy green vegetables such as fenugreek, mustard greens, collard greens or dill help round out the flavor of the dish. As with other styles of curry, popular versions of saag are made with meat, fish or vegetarian paneer",
        price: 169,
        category: "others",
    },
    {
        name: "Veg Burger",
        image: "https://plus.unsplash.com/premium_photo-1675864532183-8f37e8834db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8",
        description: "This North Indian comfort food is made with kofta, fried potato-paneer dumplings, served in a rich, creamy sauce. The dumplings can come in a variety of sizes with either a lightly colored cream sauce or a spicier orange curry with tomatoes and red chilies.",
        price: 109,
        category: "others",
    },
    {
        name: "fried soya momos",
        image: "https://images.unsplash.com/photo-1623689048105-a17b1e1936b8?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This iconic Indian food is a North Indian curry dish made with white chickpeas simmered in a spiced tomato and onion gravy. This vegetarian dish is commonly enjoyed on its own or soaked up by rice or naan. Dry versions of chana masala (without gravy) are also eaten as a snack or street food.",
        price: 169,
        category: "chinese",
    },
    {
        name: "Veg soya Chowmein",
        image: "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This iconic Indian food is a North Indian curry dish made with white chickpeas simmered in a spiced tomato and onion gravy. This vegetarian dish is commonly enjoyed on its own or soaked up by rice or naan. Dry versions of chana masala (without gravy) are also eaten as a snack or street food.",
        price: 189,
        category: "chinese",
    },
    {
        name: "Maple Chocolate Syrup",
        image: "https://images.unsplash.com/photo-1629993470807-33bfa488153b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "This iconic Indian food is a North Indian curry dish made with white chickpeas simmered in a spiced tomato and onion gravy. This vegetarian dish is commonly enjoyed on its own or soaked up by rice or naan. Dry versions of chana masala (without gravy) are also eaten as a snack or street food.",
        price: 109,
        category: "drinks",
    }, {
        name: "Strawberry Chocolate Syrup",
        image: "https://images.unsplash.com/photo-1472555794301-77353b152fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
        description: "This iconic Indian food is a North Indian curry dish made with white chickpeas simmered in a spiced tomato and onion gravy. This vegetarian dish is commonly enjoyed on its own or soaked up by rice or naan. Dry versions of chana masala (without gravy) are also eaten as a snack or street food.",
        price: 109,
        category: "drinks",
    },


]
const seedingFood = async () => {
    const food = await Food.insertMany(foods)
    console.log("food inserted")
}
seedingFood()