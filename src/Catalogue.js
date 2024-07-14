import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Catalogue.css'
import ReadMore from './ReadMore';
function Catalogue(props) {
    
    const [product, setProduct] = useState([]);

    const fetchData = () => {
    return fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => setProduct(data));
    }
    useEffect(() => {
    fetchData();
    },[])

  if(props.category!='')
  return (
    <div className='body'>
        <div className="flex-container">
        {product && product.length > 0 && 
        product.filter(product => product.category==props.category)
        .map((Obj, index) => (
            <div className="flex-item">
                <div className="card">
                <img src={Obj.image} className="image"></img>
                <hr></hr>
                <h4>{Obj.title}</h4>
                <p className="category"><span className="span">Category : </span>{Obj.category}</p>
                <p className="price"><span className="span">Price : </span>${Obj.price}</p>
                <ReadMore>{Obj.description}</ReadMore>
                </div>
            </div>
          ))}
        </div>
        <Link to={'/analyse'} class="float">
        <b class="my-float">Analyse</b>
        </Link>
    </div>
  );
  else
  return (
    <div className='body'>
        <div className="flex-container">
        {product && product.length > 0 && 
        product.map((Obj, index) => (
            <div className="flex-item">
                <div className="card">
                <img src={Obj.image} className="image"></img>
                <hr></hr>
                <h4>{Obj.title}</h4>
                <p className="category"><span className="span">Category : </span>{Obj.category}</p>
                <p className="price"><span className="span">Price : </span>${Obj.price}</p>
                <ReadMore>{Obj.description}</ReadMore>
                </div>
            </div>
          ))}
        </div>
        <Link to={'/analyse'} class="float">
        <b class="my-float">Analyse</b>
        </Link>
    </div>
  );
}

export default Catalogue;