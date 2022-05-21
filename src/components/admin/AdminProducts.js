import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'

import '../../login.css'

export default function AdminProducts() {

    let history = new useHistory();    
    
    const headers= {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }

    const [data, setData] = React.useState([])

    // axios.get('http://localhost:5000/api/products')
    // .then((res) => {
    //     setData(res.data.data);
    //     console.log(data);
    // });
    // });

    return (
        <div className="text-center m-5-auto container">
            <h2>Products</h2>
            <p class="text-right"><Link to="/AdminProduct">Add Product</Link></p>
            <div class="table-responsive">
            <table class="table table-bordered table-stripped">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>No</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>MRP</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>        
                
               
              </tbody>
            </table>
          </div>
        </div>
    )    
}