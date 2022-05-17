const db = require('../models')

db.Tech.create([
    {
      name: 'Kawaii Kitty Cafe',
      city: 'Philadelphia',
      state: 'PA',
      cuisines: 'Coffee, Cafe-Style',
      pic: '/Images/Kawaii Kitty Cafe.png',
      founded:2020
    }, 
    {
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/Images/H-Thai-M-L logo.png',
        founded:1989
      },
      {
        name: 'Burger King',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'American, fast-food',
        pic: '/Images/Burger King.png',
        founded:1953
      },  {
        name: 'Sarvanana Bhavan',
        city: 'Edison',
        state: 'NJ',
        cuisines: 'Indian, vegetarian',
        pic: '/Images/Sarvanana Bhavan.png',
        founded:1981
      },  {
        name: 'Veggie Grill',
        city: 'San Jose',
        state: 'CA',
        cuisines: 'American, vegan',
        pic: '/Images/Veggie Grill.png',
        founded:2006
      }, {
        name: 'Panda Express',
        city: 'Los Angeles',
        state: 'CA',
        cuisines: 'Chinese, gourmet',
        pic: '/Images/Panda Express.png',
        founded:1983
      }
    ])
// .then(() => {
//     console.log('Success!')
//     process.exit()
// })
// .catch(err => {
//     console.log('Failure!', err)
//     process.exit()
// })


