import React, { useEffect, useState } from 'react';
import './Features.css'
import Feature from '../Feature/Feature';
import { addToDb } from '../../utilities/fakeDb';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Features = () => {

    const [features,setFeatures] = useState([]);

    useEffect(()=>{
        fetch('featuresData.json')
        .then(res => res.json())
        .then(data => 
            setFeatures(data)
        )
    },[])
const navigate = useNavigate()


    const handleViewDetails = id => {
        console.log(id);
        addToDb(id)
        navigate(`veiwDetails/${id}`)
    }
  

    return (
        <div className='container-fluid'>
            {/* <h3>this i s:{features.length}</h3> */}
            <h2 className='heading-catagory'>Featured Jobs</h2>
            <p className='card-job'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='features-container'>

                {
                    features.map(feature => <Feature
                    
                    key={feature.id}
                    feature={feature}
                    handleViewDetails={handleViewDetails}
                    
                    
                    
                    
                    ></Feature>)
                    
                }
             

                <button className='show-jobs' >Show All Jobs</button>
            </div>
        
        </div>



        // <div className='container-fluid'>
        //    <div className="row">
        //     <div className="col-sm-1">
        //          {/* <h3>this i s:{features.length}</h3> */}
        //     <h2 className='heading-catagory'>Featured Jobs</h2>
        //     <p className='card-job'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        //     <div className='features-container  '>

        //         {
        //             features.map(feature => <Feature
                    
        //             key={feature.id}
        //             feature={feature}
        //             handleViewDetails={handleViewDetails}
                    
                    
                    
        //             ></Feature>)
        //         }

        //         <button className='show-jobs' >Show All Jobs</button>
        //     </div>
        //     </div>
        //    </div>
        
        // </div>
    );
};

export default Features;