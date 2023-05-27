import React from 'react'
import '../socialNetWork/socialNetWork.css'

function SocialNetWork() {
  return (
    <div className='socialNetWork-body'>
      <h4 className='socialNetWork-title'>Estamos en las redes</h4>
      <div className='social-network-icon-container'>
        <a href="https://www.facebook.com/"><img src="src\assets\socialMediaIcons\logoFBBlanco.png" alt="facebookIcon"/></a>
        <a href="https://www.twitter.com/"><img src="src\assets\socialMediaIcons\logoTWBlanco.png" alt="twitterIcon"/></a>
        <a href="https://www.instagram.com/"><img src="src\assets\socialMediaIcons\logoInstagramBlanco.jpg" alt="instagramIcon"/></a>
        <a href="https://www.youtube.com/"><img src="src\assets\socialMediaIcons\logoYTBlanco.jpg" alt="youtubeIcon"/></a>
      </div>
    </div>
  )
}

export default SocialNetWork