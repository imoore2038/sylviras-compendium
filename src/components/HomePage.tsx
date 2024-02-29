import React from 'react'
import MarkdownContainer from './MarkdownContainer'
import Introduction01 from '../data/Introduction01.md'
import Introduction02 from '../data/Introduction02.md'
import LinkButton from './LinkButton'

const Home = () => {
    return (
        <div>
            <MarkdownContainer filePath={Introduction01}></MarkdownContainer>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <LinkButton to="explore-the-realms" className='Category-button' style={{backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/039/214/718/large/piotr-dura-dnd-forest-2k.jpg?1625252125')" }}>Explore the Realms</LinkButton>
                <LinkButton to="rules-and-mechanics" className='Category-button' style={{backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/039/354/498/large/hugh-pindur-pindurski-mtg-magic-missile.jpg?1625662189')" }}>Rules and Mechanics</LinkButton>
                <LinkButton to="campaign-details" className='Category-button' style={{backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/65a58ab5a72f1c4f2b5123db/610609aa-bd8d-43d4-8582-0ecc5c79bdc6/Xanathar-Key-art.jpg')" }}>Campaign Details</LinkButton> 
            </div>
            <MarkdownContainer filePath={Introduction02}></MarkdownContainer>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={require("../Sylvira.png")} style={{ width: '50%' }} alt="Sylvira" />
                <i style={{ color: 'gray' }}>Sylvira and Jezebel unravelling an infernal puzzlebox.</i>
            </div>
        </div>
    )
}

export default Home