import React from 'react'
import '../socialNetWork/socialNetWork.css'
import FacebookIcon from '../../assets/socialMediaIcons/logoFBBlanco.png'
import TwitterIcon from '../../assets/socialMediaIcons/logoTWBlanco.png'
import YoutubeIcon from '../../assets/socialMediaIcons/logoYTBlanco.jpg'
import InstagramIcon from '../../assets/socialMediaIcons/logoInstagramBlanco.jpg'

function SocialNetWork() {
  return (
    <div className='socialNetWork-body'>
      <h4 className='socialNetWork-title'>Estamos en las redes</h4>
      <div className='social-network-icon-container'>
        <a href="https://www.facebook.com/"><img src={FacebookIcon} alt="facebookIcon"/></a>
        <a href="https://www.twitter.com/"><img src={TwitterIcon} alt="twitterIcon"/></a>
        <a href="https://www.instagram.com/"><img src={InstagramIcon} alt="instagramIcon"/></a>
        <a href="https://www.youtube.com/"><img src={YoutubeIcon} alt="youtubeIcon"/></a>
      </div>
    </div>
  )
}

export default SocialNetWork