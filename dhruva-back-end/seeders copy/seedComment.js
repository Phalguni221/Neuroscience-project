const db = require('../models')


async function seed() {
    let place = await db.Place.findOne({ name: 'Kawaii Kitty Cafe' })
    
    // Kawaii Kitty Cafe comment
    let comment = await db.Comment.create({
        author: 'Cat Mom Karen',
        rant: false,
        stars: 4.5,
        content: 'The kitties are excellent and the milkshakes are so good! Highly recommended!'
    })
    
        //Add .save()
        await place.save()
        
        // Exit the program
        process.exit()
    }
    seed()
    
async function seed1() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // H-Thai-ML comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    place.comments.push(comment.id)

    //Add .save()
    await place.save()
    
    // Exit the program
    process.exit()
}
seed1()

async function seed2() {
let place = await db.Place.findOne({ name: 'Burger King' })

// Veggie Grill comment
let comment = await db.Comment.create({
    author: 'Bob Burger',
    rant: false,
    stars: 5.0,
    content: 'The burgers are so good! I tried each one of them at least once!!'
})

place.comments.push(comment.id)

    //Add .save()
    await place.save()
    
    // Exit the program
    process.exit()
}
seed2()

async function seed3() {
    let place = await db.Place.findOne({ name: 'Sarvanana Bhavan'})
    
    // Veggie Grill comment
    let comment = await db.Comment.create({
        author: 'Suman',
        rant: false,
        stars: 5.0,
        content: 'The dosas here are so tasty! Worth visiting at least once in your life!!'
    })
    
    place.comments.push(comment.id)
    
        //Add .save()
        await place.save()
        
        // Exit the program
        process.exit()
    }
    seed3()


    async function seed4() {
        let place = await db.Place.findOne({ name: 'Veggie Grill' })
        
        // Veggie Grill comment
        let comment = await db.Comment.create({
            author: 'Vegan Victoria',
            rant: false,
            stars: 5.0,
            content: 'Wow, amazing vegan cuisine! Highly recommended!'
        })
        
        place.comments.push(comment.id)
        
            //Add .save()
            await place.save()
            
            // Exit the program
            process.exit()
        }
        seed4()

        
        async function seed5() {
        let place = await db.Place.findOne({ name: 'Panda Express' })
        
        // Panda Express comment
        let comment = await db.Comment.create({
            author: 'Dr.Erin Chen',
            rant: false,
            stars: 5.0,
            content: 'The food is so tasty! One of my favorite places to order to-go!'
        })
        
        place.comments.push(comment.id)
        
            //Add .save()
            await place.save()
            
            // Exit the program
            process.exit()
        }
        seed5()