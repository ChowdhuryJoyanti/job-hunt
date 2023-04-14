import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Applied = () => {
    const jobs =useLoaderData();
    console.log(jobs);

    // const{companyLogo,jobTitle,companyName, jobDescription,jobDescriptions,location,locationLogo,salary,salaryLogo} = jobs

    return (
       <div>
        <Banner></Banner>
        <div className='feature-container'>

<h2>applied:{jobs.length}</h2>


</div>
       </div> 
       
    ); 
};

export default Applied;