import React, { useState, useEffect } from "react";
import MarkdownRenderer from './MarkdownRenderer.tsx'
import file from "../LoremIpsum.md"

const TombOfAnnihilation = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(file)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, []);

    return (
        <MarkdownRenderer markdown={markdown}></MarkdownRenderer>
    )
}

export default TombOfAnnihilation