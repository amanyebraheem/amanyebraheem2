import React from 'react'
import './Breadcrum.css'
import { AiOutlineRight } from "react-icons/ai";


const Breadcrum = (props) => {

const {product} = props ;

  return (
    <div className='breadcrum'>

HOME
<AiOutlineRight />
 SHOP
 <AiOutlineRight />
{product.category}
<AiOutlineRight />
{product.name}

    </div>
  )
}

export default Breadcrum