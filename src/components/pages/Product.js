//import Rating from '@material-ui/core'
import getSymbolFromCurrency from 'currency-symbol-map';
import { Button } from 'reactstrap';
import './product.css'
import { Link } from 'react-router-dom';

const Product =({item})=>{
  console.log("Product items:",item);
  const data=item[0]
    return(
      <div className="con"> 
        <div className="con1">
            <Link to={{
        pathname: "/displayinfo",
        state: {
            id:item.id
        }
    }}><img src={item.image} alt="" width="200px" style={{padding:'10px'}} /></Link>
            <p style={{marginTop:"-10px"}}>{item.name}</p>
            <p style={{marginTop:"-10px"}}>{item.rating}</p>
            <h3 style={{marginTop:"-10px"}}>{getSymbolFromCurrency('INR')}{item.price}</h3>
            <Button color="warning" >Add to cart</Button>{' '}
            <Button color="danger" outline>Buy now</Button>
        </div> 
      </div>
    );
}
export default Product;