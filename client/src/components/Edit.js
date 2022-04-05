import React from 'react'

import {useState} from 'react';

const Edit = () => {
        // setting state
        const [inputValue, setInputValue] = useState({
            FirstName: '',
            LastName: '',
            Address: '',
            PhoneNumber: ''
        })
        const handleChange = (e) => {
            console.log(e.target.value);
            const { name, value } = e.target;
            //setting input value
            setInputValue((preval) => {
                return {
                    ...preval, [name]: value
                }
            })
        }    
    return (
        <>
            <div className='container'>
               <h1>Edit</h1>
                <form class='row'>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleFormControlInput1" class="form-label">First Name</label>
                        <input type="text" class="form-control" value={inputValue.name} onChange={handleChange} name='FirstName' id="exampleFormControlInput1" placeholder="First Name" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                        <input type="text" class="form-control" value={inputValue.name} name='LastName' onChange={handleChange} id="exampleFormControlInput1" placeholder="Last Name" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleFormControlInput1" class="form-label">Address</label>
                        <input type="text" class="form-control" value={inputValue.name} onChange={handleChange} name='Address' id="exampleFormControlInput1" placeholder="Address" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" value={inputValue.name} onChange={handleChange} name='PhoneNumber' id="exampleFormControlInput1" placeholder="Phone Number" />
                    </div>
                    <button type='submit' class='btn btn-primary'>Update</button>
                </form>
            </div>
        </>
    )
}
export default Edit