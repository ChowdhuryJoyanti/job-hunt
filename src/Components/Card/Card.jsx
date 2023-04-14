import React from 'react';
import'./Card.css'

const Card = (props) => {
    // console.log(props.list);
    const{name,jobs,img } = props.list;


    return (
        <div className='container list-card'>
         <img className='img-fluid' src={img} alt="" />
         <h5 className='card-name'>{name}</h5>
         <p className='card-jobs'>{jobs}</p>
        </div>
    );
};

export default Card;