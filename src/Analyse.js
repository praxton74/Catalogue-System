import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'react-apexcharts';
import './Analyse.css'

const Analyse = () => {

    const [Category, setCategory] = useState([]);


    const fetchD = () => {
        return fetch('https://fakestoreapi.com/products/categories')
              .then((response) => response.json())
              .then((data) => setCategory(data));
      }
    
      useEffect(() => {
        fetchD();
      },[])

    const [product, setProduct] = useState([]);

    const fetchData = () => {
    return fetch('https://fakestoreapi.com/products')
          .then((response) => response.json())
          .then((data) => setProduct(data));
    }
    useEffect(() => {
    fetchData();
    },[])

    const category_count = new Map()
    for( const x of Category)
    {
        var i=0;
        for(const y of product)
        {
            if(x==y.category)
            i=i+1;
        }
        category_count.set(x,i);
    }

    var values= [...category_count.keys()];
    var v=[...category_count.values()];

  return (
    <div>
        <header>
            <div>
            <h1 className='heading'>Categories In Catalogue</h1>
            </div>
        </header>
        <div className='div'>
        <Chart
        type='pie'
        width={1349}
        height={550}
        series={v}
        options={
            {
                title:{
                    text:"Product Pie Chart"
                },
                noData:{text:"Empty Data"},
                labels:values
            }
        }>
        </Chart>
        </div>
        <Link to={'/'} class="float">
        <b class="my-float">Back</b>
        </Link>
    </div>
  );
};

export default Analyse;
