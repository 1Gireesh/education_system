import React from 'react'

export default function ColoredTag({ color, className, text }) {
    return (
        <span className={className} style={{color}}>
            {text}
        </span>
    )
}
