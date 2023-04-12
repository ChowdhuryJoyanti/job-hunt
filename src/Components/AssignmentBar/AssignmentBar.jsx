import React, { useEffect, useState } from 'react';

const AssignmentBar = () => {
    const [assignments,setAssignments] =useState([]);

    useEffect(() =>{
        fetch('assignment.json')
        .then(res => res.json())
        .then(data =>console.log(data))

    },[])
    return (
        <div>
            
        </div>
    );
};

export default AssignmentBar;