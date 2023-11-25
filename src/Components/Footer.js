import React from 'react'
import './Footer.css';
import {BsFacebook } from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin } from 'react-icons/bs'
import {BiSolidPhoneCall} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
function Footer() {
  return (
    <div>
        <footer>
        <div className='follow_us'>
            <p>Stay connected and follow us on social media for updates.</p>
            <div className='icons'>
            <span><BsFacebook /></span>
            <span><BsInstagram />
                </span>
                <span><BsLinkedin /></span>
                </div>
        </div>
        <div className='contact'>
            <div><span><BiSolidPhoneCall /></span><span>+91 9696589663</span></div>
            <div><span><BiLogoGmail ></BiLogoGmail></span><span>communitytable@gmail.com</span></div>
        </div>
        </footer>
        
    </div>
  )
}

export default Footer