import React, { useContext } from "react";
import "./ProductDisplay.css";
import { AiTwotoneStar } from "react-icons/ai";
import { ShopContext } from "../../forder/context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;

const {addToCart} = useContext(ShopContext);


  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img
            src={product.image}
            alt=""
            style={{ width: "250px" }}
          />
          <img
            src={product.image}
            alt=""
            style={{ width: "250px"}}
          />
          <img
            src={product.image}
            alt=""
            style={{ width: "250px" }}
          />
          <img
            src={product.image}
            alt=""
            style={{ width: "250px" }}
          />
        </div>
      </div>
      <div className="productdisplay-img">
        <img className="productdisplay-main-img"
          src={product.image}
      
          alt=""
        />
      </div>

      <div className="productDisplay-right">
        <h1>{product.name}</h1>
        <div className="productDisplay-right-star">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <p  style={{color:'black'}}  >(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-price-new">
            ${product.new_price}
        </div>
        <div className="productdisplay-right-description">
            A lightweight , usually knitted, pullover shirt, chose-fitting and with around neckline and short sleeves, worn as  an undershirt or outer garment.
            </div>

<div className="productdisplay-right-size">
<h1>Select Size</h1>
<div className="productdisplay-right-sizes">
<div>S</div>
<div>M</div>
<div>L</div>
<div>XL</div>
<div>XXL</div>
</div>
</div>
<button   onClick={()=>{addToCart(product.id)}}  >ADD TO CART</button>
<p className="productdisplay-right-category">
  <span>Category : </span> Women , T-Shirt , Crop Top
</p>



<p className="productdisplay-right-category">
  <span>Tags : </span> Modern  , Latest
</p>
   

        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
