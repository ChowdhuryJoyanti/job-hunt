import React, { useEffect, useState } from 'react';
import './Cards.css'
import Card from '../Card/Card';

const Cards = () => {

    const [lists , setLists] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then ( res => res.json())
        .then(data => setLists(data))

    },[])





    return (
        <div className='card-container'>
            {/* <h3>list comming here:{lists.length}</h3> */}
            <h2 className='heading-catagory'>Job Category List</h2>
            <p className='card-job'>Explore thousands of job opportunities with all the information you need. Its your future</p>

              <div  className='list-container  d-sm-flex  d-md-flex d-lg-flex'>
              {
                    lists.map(list => <Card
                    key={list.id}
                    list = {list}
                    
                    ></Card> )
                }
              </div>

        </div>
    );
};

export default Cards;