import React from "react";
// import Navgo from './pages/Navgo'
import { Route, Routes } from "react-router-dom";
import Shop from "./component/Shop";
import Products from "./component/Products";
import ShopCateory from "./component/ShopCateory";
import Login from "./component/Login";
import Cart from "./component/Cart";
import Navgo from "./forder/pages/Navgo";
import Footer from "./component/Footer/Footer";

//images

// import men_banner from './image/13013410800-p.jpg'
// import kid_banner from './image/img017-02-3732022c-e9e1-4cdf-aaf1-578822751138_0.jpg';
// import women_banner from './image/13136410800-a1.jpg';

import men_banner from './forder/Assets/image/13013410800-p.jpg'
import kid_banner from './forder/Assets/image/img017-02-3732022c-e9e1-4cdf-aaf1-578822751138_0.jpg';
import women_banner from './forder/Assets/image/13136410800-p.jpg';




const App = () => {
  return (
    <div>
      <Navgo />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route
          path="/mens"
          element={<ShopCateory banner={men_banner} category="mens" />}
        />
        <Route
          path="/women"
          element={<ShopCateory banner={women_banner} category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCateory banner={kid_banner} category="kids" />}
        />

        <Route path="/product" element={<Products />}>
          <Route path=":productId" element={<Products />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
