import React from 'react'
import logo from '../img/logo.png'

export default function HomePage() {
  return (
    <>
      <div className="about-title">
      <h1>— Welcome —</h1>
      </div>

      <div className="about-p">
          <p>
          This is your passport to the wonderful world of plants and botanicals. Explore a vast variety of 
          plant species from around the world. Dive into detailed descriptions, care guides, and growing 
          tips for each plant, making it easy to care for your green companions!
          </p>
      </div>
      <img src={logo} alt="Mandrake Logo" className="logo" />
    </>
  );
}