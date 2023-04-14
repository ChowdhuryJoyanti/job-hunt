import React from 'react';
import'./JobDetail.css'

const JobDetail = ({detail}) => {
    // console.log(props.detail);

  
        const {description,jobResponsibility,educationalRequirements,experiences,jobTitle,Salary,Phone,Email,Address}= detail
    return (
        <div className='container d-flex'>
            <div className='job-detail'>
                <p>Job Description:{description}</p>
                <p>Job Responsibility:{jobResponsibility}</p>
                <p>Educational Requirements:{educationalRequirements}</p>
                <p>experiences:{experiences}</p>
                <p></p>
            </div>
            <div className='contact-detail'>
                <p>jobTitle:{jobTitle}</p>
                <p>Salary:{Salary}</p>
                <p>Phone:{Phone}</p>
                <p>Email:{Email}</p>
                <p>Address:{Address}</p>
            </div>
        </div>
    );
};

export default JobDetail;