import React from 'react';
import { RiShareForwardLine } from 'react-icons/ri';
import Profile from '../../assets/profile_img.png';

const Profile = () => {
  return (
    <div className='profile'>
        <div className='profiles'>
            <div className='profile-pics'>
                <img src={Profile} alt='profile-pic' id='profile__img'/>
                <h1>Oluwapelumi Martins</h1>
            </div>
            <div className='profile-share'>
                <RiShareForwardLine />
            </div>
        </div>
    </div>
  )
}

export default Profile