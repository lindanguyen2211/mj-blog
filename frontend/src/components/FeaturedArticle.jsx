import React from 'react'
import featuredImg from '../assets/twim-new-release-3-6-48e3c81f.webp'

const FeaturedArticle = () => {
  return (
    <div id='featured-article'>
      <span className="featured-badge">FEATURED</span>
      <img src={featuredImg} alt="" className='left featured-img' />
      <div className="right">
        <h1>TWIM 3.6 - What's new ?</h1>
        <p>Discover new features, changes and improvements</p>
        <a href="https://modjaw.com/en/resources/4d-blog.html?view=article&id=115:twim-3-6-june-2025-en&catid=11" className="read-more-btn">Read More</a>
      </div>
    </div>
  )
}

export default FeaturedArticle