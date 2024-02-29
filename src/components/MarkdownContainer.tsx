import React, { useState, useEffect } from "react";
import Markdown from 'react-markdown'

const MarkdownContainer = ({filePath}) => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(filePath)
            .then((res) => res.text())
            .then((text) => setMarkdown(text));
    }, [filePath]);

    return (
        <Markdown>{markdown}</Markdown>
    )
}

export default MarkdownContainer