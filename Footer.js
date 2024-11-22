import React from 'react'
import './Footer.css'
import { AiOutlineInstagram } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import { BiLogoWhatsapp } from "react-icons/bi";


const Footer = () => {
  return (
    <div className='footer'>

<div className='footer-logo'>
<img src='/imageee/download (1).jpeg' alt='' style={{width:'50px'}} />
<p>SHOPPES</p>
</div>

<ul className='footer-links'>
<li>Company</li>
<li>Products</li>
<li>Offices</li>
<li>About</li>
<li>Contact </li>
</ul>
<div className='footer-social-icon'>
<div className='footer-icons-container'>
<AiOutlineInstagram  style={{padding:'10px' , paddingBottom:'6px' , background:'#fbfbfb' , border:'1px solid #ebebeb'}}   />
<BiLogoWhatsapp   style={{padding:'10px' , paddingBottom:'6px' , background:'#fbfbfb' , border:'1px solid #ebebeb'}}    />
<CgFacebook    style={{padding:'10px' , paddingBottom:'6px' , background:'#fbfbfb' , border:'1px solid #ebebeb'}} />
</div>
</div>
<div className='footer-copyright'>
<hr />
<p>Coyright @ 2024 - All</p>
</div>

    </div>
  )
}

export default Footer