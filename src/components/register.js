import axios from 'axios';
import { useState,useEffect } from 'react';
 const RegisterStudent = () =>{
    const [registerData,setRegisterData]=useState('')
    const inputHandler=(e)=>{setRegisterData({...registerData,[e.target.name]:e.target.value})}
    const submitHandler=async(e)=>{
        e.preventDefault()
        console.log(registerData)
        const res=await axios.post('http://localhost:5000/login/teacher/teacherdashboard/registerstudent',{...registerData})
        alert("user registered success fully")
   }
     return(
     <>
    <div class="container-fluid bg-primary">
        <div class="py-1 px-1  bg-primary">
            <div class="row">
                <div class=" col-md-2 mx-auto">
                    <img src="logo-1.png"style={{ width:"200px", height:"200px"}}/>
                </div>
                <div class=" col-md-9 mx-auto">
                    <h6 class="display-4 font-weight-bold">STUDENT MANAGEMENT SYSTEM</h6>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="card shadow">
            <div class="card-header bg-success">
                <h1 class="card-title text-center text-white">-Student Register-</h1>
            </div>
            <div class="card-body">
                <form action="">


                    <div class="form-group col-md-6">
                        <label for="name" class="font-weight-bold"> Name:</label>
                        <input class="form-control border border-primary" type="text" name="name" id="name"
                            placeholder="Enter your name" onChange={inputHandler}/>
                    </div>

                    <div class="form-group col-md-6 ">
                        <label for="name" class="font-weight-bold ">username:</label>
                        <input class="form-control border border-primary" type="text" name="username" id="username"
                            placeholder="no space" onChange={inputHandler}/>
                    </div>
                    <div class="form-group  col-md-6">
                        <label for="name" class="font-weight-bold ">password:</label>
                        <input class="form-control border border-primary" type="text" name="password" id="password"
                            placeholder="no space" onChange={inputHandler}/>
                    </div>
                    <div class="form-group ">
                        <label for="name" class="font-weight-bold">EMAIL:</label>
                        <input class="form-control border border-primary" type="text" name="email" id="email"
                            placeholder="***@gmail.com" onChange={inputHandler} />
                    </div>

                    <div class="row">
                        <div class="form-group col-md-4 ">
                            <label for="class" class="font-weight-bold">class</label>
                            <input class="form-control border border-primary input-lg" type="number" name="class"
                                id="class" placeholder=""onChange={inputHandler}/>

                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="Roll_no" class="font-weight-bold">Roll_no</label>
                            <input class="form-control border border-primary input-lg" type="number" name="Roll_no"
                                id="Roll_no" placeholder="" onChange={inputHandler}/>

                        </div>
                        <div class="form-group col-md-4 ">
                            <label for="Roll_no" class="font-weight-bold">section</label>
                            <input class="form-control border border-primary input-lg" type="text" name="section"
                                id="Roll_no" placeholder="" onChange={inputHandler}/>

                        </div>
                    </div>

                    <hr/>
                    <button type="submit" class="btn btn-success float-center" onClick={submitHandler}>SUBMIT</button>

                </form>
            </div>

        </div>
    </div>
    </>

)
}


export default RegisterStudent;