import React from 'react'
import { Link } from "react-router-dom";

const BlankPage: React.FC<{}> = () => {
    return (
        <div style={{padding:'10px 15px', margin:'10px 5px', border:'5px solid gold', backgroundColor:'lightgoldenrodyellow'}}>
            <h2>🧙🏾‍♂️ 💭Nothing here but an illusion... 💭🧙🏾‍♂️</h2>
            This section is a placeholder. There's nothing here yet, but check back later to see if Sylvira has produced any interesting research.<br/>
            Otherwise, you can return to <Link to="/"> the home page.</Link>
        </div>
    )
}

export default BlankPage