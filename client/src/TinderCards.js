import React, { useState,useEffect} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card";
import axios from "./axios/axios";


const TinderCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get('/tinder/cards');
            setPeople(req.data);
            console.log(req)
        }
        fetchData();
    },[]); 
    console.log(people)
    const swiped = (direction,nameToDelete) => {
        console.log("removing " + nameToDelete);
        // setLastDirection(direction);
    }
    const outOfFrame = (name) => {
        console.log(name+" left the screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__CardContainer">
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={CharacterData.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)}
                    onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                <div
                className="card"
                style={{ backgroundImage: `url(${person.imgUrl})` }}>
                        <h3>{ person.name}</h3>
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
