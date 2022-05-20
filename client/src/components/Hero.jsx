import React from 'react'

const Hero = () => {
  return (
    <div className="hero">
        <img src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873" />
        <div className="hero-deets">
            <h1 data-title="Stay&nbsp;curious.">Stay curious.</h1>
            <h3>Discover stories, thinking, and expertise from writers on any topic.</h3>
            <button>Start Reading</button>
        </div>
    </div>
  )
}

export default Hero