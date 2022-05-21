import "./LeftSide.css";
import { useState } from "react";
import Product from "./Product";
import './product.css'

const Productlist =()=>{
   

    const [product,setProduct]=useState([
             { id: 1, name : "Iphone10", rating: "34565", price: "4534", image:"https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"},
            { id: 2, name : "Iphone11", rating: "6568", price:"76543", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
            { id: 3, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { id: 4, name : "Iphone13", rating: "3445", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { id: 6, name : "Iphone13", rating: "3445", price:"637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { id: 5, name : "Iphone12", rating: "8754", price:"76543", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},       
    ]);

    

    return(
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <div className="prod">
                  {
                    product.map((item)=>(
                    <Product item={item}/>
                    ))
                  }  
                  </div> 
              </div>
          </div>
      </div>
    
  );
}
export default Productlist;