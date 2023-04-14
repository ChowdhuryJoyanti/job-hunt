import React, { useEffect, useState } from 'react';
import'./JobDetails.css'
import JobDetail from '../JobDetail/JobDetail';
import Banner from '../Banner/Banner';

const JobDetails = () => {

    const [details,setDetails] = useState([]);
    useEffect(()=>{ 
            fetch('featuresData.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    },[])

    const handleViewDetails = () => {
        console.log('dasdf');
        const savedJobs = JSON.parse(localStorage.getItem('saved-Jobs'))
        savedJobs.push(job)
        localStorage.setItem(savedJobs)
    }

    return (
        <div>
          <Banner></Banner>
                <div className='job-details'>

                {
                    details.map(detail => <JobDetail
                    key={detail.id}
                    detail={detail}
                    handleViewDetails={handleViewDetails}


                    ></JobDetail>)
                }
              

                </div>
                <div className="contact-details">

                </div>

        </div>
    );
};

export default JobDetails;