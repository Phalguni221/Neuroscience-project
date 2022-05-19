const db = require('../models')

db.Tech.create([
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
        title: 'Cell Signaling in the Brain',
        author: 'Ruairi J Mackenzie',
        date: 'May 11, 2022',
        link:"https://www.technologynetworks.com/neuroscience/infographics/cell-signaling-in-the-brain-361493"
      },
      
      {
        title: 'AI Predicts Infant Age and Gender Based on Temperament',
        author: 'Ruairi J Mackenzie',
        date: 'May 15, 2022',
      link:"https://neurosciencenews.com/ai-age-gender-baby-20589/"
      },

      {
        title: 'New Brain Stimulation Treatments Help Smokers Quit',
        author: 'Society for the Study of Addiction',
        date: 'April 26, 2022',
        link:"https://neurosciencenews.com/nibs-smoking-20474/"
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


