import Markdown from 'react-markdown'
import React from 'react'

const MarkdownRenderer = ({markdown}) => {
    return (
        <Markdown>{markdown}</Markdown>
    )
}

export default MarkdownRenderer