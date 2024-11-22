import React, { useContext } from "react";

import "./Css/Category.css";
import { ShopContext } from "../forder/context/ShopContext";
import Item from "../forder/item/Item";
import { AiOutlineDown } from "react-icons/ai";




const ShopCateory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img   className="shopcategory-banner"  src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>
          out of 36 products
        </p>

        <div className="shopcategory-sort">
          Sort by <AiOutlineDown />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item) => {
          // console.log(all_product);
          return (
            <Item
              name={item.name}
              key={item}
              id={item.id}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>

<div className="shopcategory-loadmore">

Explore More

</div>


    </div>
  );
};

export default ShopCateory;
