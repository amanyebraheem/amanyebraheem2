import React from 'react'
import './RelatedProducts.css'


import Item from '../../forder/item/Item'
// 
import all_data from '../../forder/Assets/data'
const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>

<h1>Related Products</h1>
<hr />

<div className='relatedproducts-item'>
{
all_data.map((item , i)=>{
console.log(all_data)
return <Item    name={item.name}  key={i}  id={item.id}  image={item.image}  new_price={item.new_price}   old_price={item.old_price}  />

    })
}
</div>

    </div>
  )
}

export default RelatedProducts