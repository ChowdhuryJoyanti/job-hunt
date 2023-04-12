import React, { useEffect, useState } from 'react';
import'./JobDetails.css'

const JobDetails = () => {

    cost [details,setDetails] = useState([]);
    useEffect(()=>{ 
            fetch('featuresData.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    },[])

    const handleViewDetails = () => {
        console.log('dasdf');
    }

    return (
        <div>
            
        </div>
    );
};

export default JobDetails;