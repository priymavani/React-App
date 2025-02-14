import React, { useState, useEffect } from 'react';

export const Codinggita = () => {

    useEffect(() => {
        fetch('https://codinggita-api-men.onrender.com/courses') 
            .then(response => response.json())
            .then(data => {
                console.log('response: ', data);

                
            })
            .catch(err => {
                console.error('Error fetching data: ', err);
            });
    }, []); 


    return (
        <div>
            <h1>Students List</h1>
        </div>
    );
};

