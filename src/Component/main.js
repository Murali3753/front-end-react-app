import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: '/api/',
//   timeout: 2000,
//   headers: { 'X-Custom-Header': 'foobar' }
// });

function GridExample() {
  
  return (
    <Row xs={1} md={3} className="g-8">
      {Array.from({ length: 12}).map((_, idx) => (
      <div className='product-container'>

       <div className='container'>
       <div className='card'>
           <div className='card-image'>
               <img src=" https://res.cloudinary.com/muralivijay/image/upload/v1627613588/food%20images/food%20images/pizza_3_l3whpv.jpg"alt='image'></img>
           </div>
           <div className='card-content'>
               <div className='card-heading'><h4>Tomoto Basil Italian Pizza</h4></div>
               <div className='card-price'>$420</div>
               <div className='card-text'> <p>Dressed with oil, the origanum and garlic cloves shredded minutely.Fresh tomoto sauce Parmesan cheese,Jalape nopeppers,red peppers</p></div>
               <a class='button'>Order Now</a>
           </div>
       </div>
   </div>
   </div>
      ))}
    </Row>
  );
}

export default GridExample;