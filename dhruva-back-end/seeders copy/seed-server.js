const db = require('../models')

db.Server.create([
    {
      title: 'Using Virtual Reality for Anger Control',
      author: 'Mary Ann Lieber, Inc',
      date: 'May 15, 2022',
      link:"https://neurosciencenews.com/virtual-reality-anger-management-20590/"
    }, 

    {
        title: 'Enhancing Deep Sleep',
        author: 'ETH Zurich',
        date: 'April 8, 2022',
       link:"https://neurosciencenews.com/sleeploop-neurotech-sleep-20346/"
      },

      {
        title: 'Stimulating Brain Circuits Promotes Neuron Growth in Adulthood, Improving Cognition and Mood',
        author: 'UNC Health Care',
        date: 'May 17, 2022',
        link:"https://neurosciencenews.com/optogenetics-neurogenesis-20603/"
      },
      
      {
        title: 'Artificial Intelligence and Robotics Uncover Hidden Signatures of Parkinson’s Disease',
        author: 'New York Stem Cell Foundation',
        date: 'March 25, 2022',
        link:"https://neurosciencenews.com/parkinsons-ai-robotics-20259/"
      },
      
      {
        title: 'High Static Magnetic Field Can Relieve Anxiety',
        author: 'Chinese Academy of Science',
        date: 'May 1, 2022',
        link:"https://neurosciencenews.com/high-static-magnetic-field-anxiety-20503/"
      },
      
      {
        title: 'Sarvanana Bhavan',
        author: 'Edison',
        date: 'NJ',
        cuisines: 'Indian, vegetarian',
        pic: '/Images/Sarvanana Bhavan.png',
        founded:1981
      },  {
        title: 'Veggie Grill',
        author: 'San Jose',
        date: 'CA',
        cuisines: 'American, vegan',
        pic: '/Images/Veggie Grill.png',
        founded:2006
      }, {
        title: 'Panda Express',
        author: 'Los Angeles',
        date: 'CA',
        cuisines: 'Chinese, gourmet',
        pic: '/Images/Panda Express.png',
        founded:1983
      }
    ])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})


