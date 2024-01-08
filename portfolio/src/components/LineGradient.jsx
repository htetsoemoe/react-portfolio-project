import React from 'react'

const LineGradient = ({ width = "w-full", height }) => {
    return <div className={`h-0.5 ${width} sm:${height} bg-gradient-rainblue`}></div>
}

export default LineGradient
