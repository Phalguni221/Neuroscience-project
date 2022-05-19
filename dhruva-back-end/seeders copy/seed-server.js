const db = require('../models')

db.Server.create([
    {
      title: 'Statins May Provide Protection Against Depression',
      author: 'Elsevier',
      date: 'May 17, 2022',
      link:"https://neurosciencenews.com/statins-depression-20602/"
    }, 

      {
        title: 'Hope for Treatments Against Hearing Loss as 10 Genes Identified',
        author: 'King’s College London',
        date: 'May 16, 2022',
        link:"https://neurosciencenews.com/genetics-hearing-loss-20594/"
      },
      
      {
        title: 'Exercise Increases Dopamine Release in Mice',
        author: 'SfN',
        date: 'May 16, 2022',
        link:"https://neurosciencenews.com/exercise-dopamine-20592/"
      },
      
      {
        title: 'If You Stand Like Superman or Wonder Woman, Would You Feel Stronger?',
        author: ' Martin Luther University',
        date: 'May 16, 2022',
        link:"https://neurosciencenews.com/dominant-stance-confidence-20591/"
      },

      {
        title: 'A Study Reveals One of the Reasons Why Neurons Die in Parkinson’s Patients',
        author: 'University of Córdoba',
        date: 'May 15, 2022',
        link:"https://neurosciencenews.com/dj1-gene-parkinsons-20588/"
      }, 
  
        {
          title: 'Designer Neurons Offer New Hope for Treatment of Parkinson’s Disease',
          author: 'Arizona State University',
          date: 'May 11, 2022',
          link:"https://neurosciencenews.com/ipsc-dopamine-parkinsons-neurons-20568/"
        },
        
        {
          title: 'Multiple Sclerosis Patients With Higher B Cell Counts Found to Have a Better Vaccine Response',
          author: 'Uppsala University',
          date: 'May 12, 2022',
          link:"https://neurosciencenews.com/multiple-sclerosis-vaccine-response-20576/"
        },
        
        {
          title: 'What Makes Some More Afraid of Change Than Others?',
          author: 'LSU',
          date: 'May 15, 2022',
          link:"https://neurosciencenews.com/gene-expression-fear-change-20587/"
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


