import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from 'axios';

const AssignmentBar = () => {
    const [assignments,setAssignments] =useState([]);

    useEffect(() =>{
        // fetch('assignment.json')
        // .then(res => res.json())
        // .then(data =>console.log(data))
        axios.get('assignment.json')
        .then(data => {
            const loadedData = data.data;
            console.log(loadedData);
            const assignmentData = loadedData.map(assignment =>{
                const parts = assignment.slug.split('_')
                const numbers = parts[1];
                const assignmentInfo ={
                    name:assignment.name,
                    number:assignment.number
                }
                return assignmentInfo;
            })
            console.log(assignmentData);
            setAssignments(assignmentData)
        });

    },[])
    return (
        <div className='container'>
            <BarChart width={1000} height={500} data={assignments}>
            <Bar dataKey="number" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
           <YAxis/>
            </BarChart>
            
        </div>
    );
};

export default AssignmentBar;