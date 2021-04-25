import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {Card} from 'react-bootstrap';


export default function Register() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        const userData = {name, email, password};
        const answer = await Axios.post('http://localhost:5000/app/signup', userData);
        const message = answer.data.message;
        if (message !== 'Welcome') {
            Swal.fire({
                icon: 'error',
                title: message,
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            window.location.href='/login';
            Swal.fire({
                icon: 'success',
                title: 'Successful registered',
                showConfirmButton: false,
                timer: 2500
            })
        }
    }

    return (
        <div className="col s12 m4 l2" style={{width: '100%', 
        display:'flex', justifyContent:'center', alignContent:'center',marginTop:"25px", marginBottom:"25px"}}>
            <div className="row">
                <Card border="secondary" className="col s12 m4 l2">
                    <form className="col s12 m4 l8" onSubmit={register}>
                    <br/>
                    <br/>
                    <br/>
                        <label style={{display:'flex',justifyContent:'center'}}>To get access to all content you need to register first</label>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <h4>Registration Form</h4>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input placeholder="Name"  type="text" className="form-control" id="name" aria-describedby="" onChange={(e)=>setName(e.target.value)}
                            autoFocus required />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input placeholder="Email" type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input placeholder="Password" type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)}/>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    </form>
                </Card>
            </div>
        </div>
        
        
    )
}
