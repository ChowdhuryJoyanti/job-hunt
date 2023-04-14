import React from 'react';
import './Feature.css'

const Feature = ({feature,handleViewDetails}) => {
// console.log(props.feature);
    
    const{companyLogo,jobTitle,companyName, jobDescription,jobDescriptions,location,locationLogo,salary,salaryLogo,id} =feature

    return (
        <div className=' container-fluid feature-container'>
            <img src={companyLogo} alt="" />
            <h4 className='mt-3'>{jobTitle}</h4>
            <p>{companyName}</p>
            <div className='d-flex mt-2'>
                <p className='job-description'>{jobDescription}</p>
                <p className='job-description'>{jobDescriptions}</p>
            </div>
            <div className='d-flex'>
                <img  className='location-img' src={locationLogo} alt="" />
                <p className='location-description'>{location}</p>
                <img className='location-img' src={salaryLogo} alt="" />
                <p>{salary}</p>
            </div>
          <button onClick={() =>handleViewDetails(id)} className='apply'>View Details</button>
        </div>
    );
};





export default Feature;