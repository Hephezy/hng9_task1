import React from 'react';
import './Links.scss';
import slack from "../../assets/slack.png";
import github from "../../assets/github.png";

const Links = () => {
  return (
      <div className='link'>
        <div className='link-container'>
           <a href='https://twitter.com/MarpelHephezy?t=lqT0NKS2eq5eUOfGrUwe9g&s=09' id='twitter__link' target='_blank' rel="noreferrer">Twitter Link</a>
           <a href='https://training.zuri.team' id='btn__zuri' target='_blank' rel="noreferrer">Zuri Team</a>
           <a href='http://books.zuri.team' id='books' target='_blank' rel="noreferrer">Zuri Books</a>
           <a href='https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>' id='book__python' target='_blank' rel="noreferrer">Python Books</a>
           <a href='https://background.zuri.team' id='pitch' target='_blank' rel="noreferrer">Coders Background Check</a>
           <a href='https://books.zuri.team/design_rules' id='book__design' target='_blank' rel="noreferrer">Design Books</a>
        </div>
        <div className='link-logo'>
          <a href='https://slack.com' target='_blank' rel="noreferrer"> <img src={slack} alt="slack"/> </a>
          <a href='https://github.com/Hephezy' target='_blank' rel="noreferrer"> <img src={github} alt="github"/> </a>
        </div>
      </div>
  )
}

export default Links