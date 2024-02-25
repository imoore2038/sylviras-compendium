import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

const LinkContainer = styled.span({
    display: 'block',
    margin: '8px 0',
});

const Home = () => {
    return (
        <div>
            <h2>Welcome to the Realms</h2>
            <p>
                <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'darkred' }}>Sylvira Savikas</span> is a powerful archmage and one of the Eight Great Readers of Candlekeep. She's spent much of her life documenting the planes of existence, and collating all the research she's been able to uncover within the halls of Candlekeep about the realms of Faerûn. At last, her work has been published and the definitive guide to aspects of life, culture, and magic across Toril is available for your perusal!
            </p>
            <p>
                Together with her quasit familiar Jezebel, Sylvira has spent a great deal of time gathering notes from various sages and knowledgeable experts, from the mysterious Mordenkainen to the dangerous Xanathar. This compendium contains some details from Xanathar's Guide to Everything, Tasha's Cauldron of Everything, and various other sources. Detailed inside is lore about the histories, peoples, and places of the realms, tales of the gods and their pantheons, and discussions on the finer points of magic.
            </p>
            <LinkContainer>
                <NavLink to={'/tomb-of-annihilation'}>Tomb of Annihilation Resources</NavLink>
            </LinkContainer>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={require("../Sylvira.png")} style={{ width: '50%' }} alt="Sylvira" />
                <i style={{ color: 'gray' }}>Sylvira and Jezebel unravelling an infernal puzzlebox.</i>
            </div>
            <p>
                Welcome to a world of magic and adventure. Originally created by Ed Greenwood, the Forgotten Realms setting has been home to Dungeons & Dragons stories and games for decades. Built for tales of swords and sorcery, the Realms initially grew and flourished in Ed's D&D campaign, which featured heroes like the Knights of Myth Drannor in the Dalelands. Ed also shared glimpses of the Realms in the pages of Dragon magazine, giving D&D players their first tales from the wizard Elminster, the old sage of Shadowdale, who occasionally found his way through a portal between Faerûn and our world and into Ed's living room.
            </p>
            <p>
                Though 5th edition did see the release of the Sword Coast Adventurer's Guide, most of the Forgotten Realms lore is sourced from older editions. This compendium sees the modernising of some of that worldbuilding, as well as the introduction of new ideas, new mechanics, and expansions on older concepts. Not all of it will align with what is considered official canon, but this compendium serves as a wiki and source for any questions you might have about our Realms.
            </p>
            <p>
                In the years since, the Forgotten Realms have played host to a vast number of game products, novels, video games, and more, making it one of the most widely visited fantasy settings ever created. The lost portals to the Realms have returned and remained open in the depths of our imaginations and do so to this day, as more and more visitors find their way there.
            </p>
            <p>
                The lore of the Realms is vast, and this compendium will continue to grow as new sources are uncovered. Tales from our own games, lore written by everyone at the table, and characters of heroic renown will live within these pages, for the world of Toril is ever-growing.
            </p>
            <h2>What is Sylvira's Compendium?</h2>
            <p>
                Sylvira's Compendium of Faerûn offers a combination of new, old, and revised. In part, it aims to compile all the information found in resources like the Player's Handbook, Tasha's, and Xanathar's into one place. It makes revisions to some of the mechanics and ideas found in those books, like changes to the way some classes and subclasses work, or modification of spells. It also provides new players options, such as spells, subclasses, and revised frameworks for ancestry and culture. The compendium also has details on the lore of the realms, which should serve to fill out the background of your characters, and tie them tightly to the world they live in.
            </p>
            <p>
                The compendium will be continuously updated as Sylvira adds notes and research. As an avid and practiced sage, Sylvira collects from many sources; player input is encouraged so that this depiction of the Forgotten Realms is shaped by many voices.
            </p>
            <h2>Sylvira vs 'Canon'</h2>
            <p>
                Some of the information in this compendium may conflict with what you know from sourcebooks and manuals, like classes or spells, and some may conflict with the canonical information established by novels, stories, or the Forgotten Realms wiki. The general assumption is that when in doubt, treat the information in this compendium as true and accurate. In many places, information here specifically conflicts with or updates what might be considered canon elsewhere.
            </p>
            <p>
                If this compendium is missing information, consider what kind of information it is: anything mechanical, such as spell information, class features, or combat mechanics, can be instead found in the Player's Handbook, Xanather's Guide etc. For example, if there is no "Wizard" class section in this compendium, the class and subclasses that appear in the sourcebooks (PHB) are the ones you should use.
                If the information is about specific lore, like cultures, places, people, or events, do not trust online sources such as the Forgotten Realms wiki or homebrew campaign wikis, as they will be both inaccurate and filled with spoilers. Instead, consider asking your DM and working with them to create new content to be added to this guide.
            </p>
        </div>
    )
}

export default Home