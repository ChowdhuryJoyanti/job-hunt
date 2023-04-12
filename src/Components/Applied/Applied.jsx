import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const jobs =useLoaderData();
    console.log(jobs);

    // const{companyLogo,jobTitle,companyName, jobDescription,jobDescriptions,location,locationLogo,salary,salaryLogo} = jobs

    return (
        <div className='feature-container'>
            <h2>applied:{jobs.length}</h2>
           

        </div>
    ); 
};

export default Applied;