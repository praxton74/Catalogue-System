import { useState , useEffect } from 'react';
import './Header.css';
function Header(props) {

    const [Category, setCategory] = useState([]);


    const fetchData = () => {
        return fetch('https://fakestoreapi.com/products/categories')
              .then((response) => response.json())
              .then((data) => setCategory(data));
      }
    
      useEffect(() => {
        fetchData();
      },[])

      console.log(Category);


        const [selectedOption, setSelectedOption] = useState('');

        const handleChange = (event) => {
            setSelectedOption(event.target.value);
        };
        
        props.onDataUpdate(selectedOption);

  return (
    <div className="Header">
        <header className='header'>
            <div>
            <select id="option" value={selectedOption} onChange={handleChange}>
            <option value=''>All Category</option>
            {Category && Category.length > 0 && Category.map((category, index) => (
            <option value={category}>{category}</option>
            ))}
            </select>
            <input type='text' className="Input" placeholder="Search Product"/>
            </div>
        </header>
    </div>
  );
}

export default Header;