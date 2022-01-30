import type { NextPage } from 'next'
import { useEffect, useState } from 'react'

const examples = ['Penguin', 'Sponges', 'Dog', 'Cat', 'Lizard', 'Rabbit', 'Rat', 'Fish',
    'Duck', "Hamster", "Squirrel", "Buffalo", "Fox", "Wolf", "Bear"]

const getRandomAnimal = () => {
    const index = Math.floor(Math.random() * examples.length)
    return examples[index]
}

const Broken : NextPage = () => {
    const [animal, setAnimal] = useState(getRandomAnimal())
    // const animal = getRandomAnimal()   // Doing this instead of useState above also breaks
    // The only way to fix it is to not set it in useState, then set it later in useEffect.
    const link = 'https://en.wikipedia.org/wiki/' + animal
    return (
        <div>
            <div style={{marginTop: 32, marginLeft: 32}}>
                <p>{`This is the animal: ${animal}`}</p>
                <p>{"This is the link: "}<a href={link}>{link}</a></p>
                <p>{"But, when you click the link above, it goes to a different animal's page."}</p>
                <p>{"Hovering over the link shows that the href is different even though it is the same variable being used."}</p>
                <p>{"If the link correctly matches, it is because you navigated to this page from the main page (or occasional random chance) -- if you refresh, it will be wrong again."}</p>
            </div>
        </div>
    )
}

export default Broken