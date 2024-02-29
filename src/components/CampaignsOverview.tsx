import React from 'react'
import LinkButton from './LinkButton'


const CampaignsOverview: React.FC<{}> = () => {
    return (
        <>
            <h1>Choose a Campaign</h1>
            <p>Here you can find information about current and previous campaigns.</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <LinkButton className='Category-button' to='tomb-of-annihilation' style={{backgroundImage: "url('https://cdna.artstation.com/p/assets/images/images/007/382/222/large/jedd-chevrier-true-tomb-entrance-chevrier-final.jpg?1505758494')"}}>Tomb of Annihilation</LinkButton>
                <LinkButton className='Category-button' to='princes-of-the-apocalypse' style={{backgroundImage: "url('https://images.ctfassets.net/swt2dsco9mfe/2XwmpnjBO0ChwzItnfTfEP/324defc53bfa15326c2691689db25bf3/1920x1342-pota.jpg?q=100')"}}>Princes of the Apocalypse</LinkButton>
            </div>
        </>
    )
}

export default CampaignsOverview