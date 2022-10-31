import React from 'react';
import Selfie from '../../assets/Selfie.png';
import share from '../../assets/share.png';
import menu from '../../assets/menu.png';
import './Profile.scss'

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profiles'>
            <div className='profile-pics'>
                <img src={Selfie} alt='profile-pic' id='profile__img'/>
                <h1 id='twitter'>Pelumi Martins</h1>
                <h1 id='slack'>Slack</h1>
            </div>
            <div className='profile-share'>
                <img src={share} alt="share" className='share'/>
            </div>
            <div className='profile-menu'>
                <img src={menu} alt="menu" className='menu' />
            </div>
        </div>
    </div>
  )
}

export default Profile