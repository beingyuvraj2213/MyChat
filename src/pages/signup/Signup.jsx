import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

  const [inputs,setInputs]=useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(inputs)
  }

  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="h-full w-full bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 p-10">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Signup
          <span className="text-blue-300 pl-4 font-bold">MyChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
                <span className="text-base label-text text-gray-300">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.fullName}
              onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
            />
          </div>
          <div>
            <label className="label">
                <span className="text-base label-text text-gray-300">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.username}
              onChange={(e)=>setInputs({...inputs,username:e.target.value})}
            />
          </div>
          <div>
            <label className="label">
                <span className="text-base label-text text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.password}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})}
            />
          </div>
          <div>
            <label className="label">
                <span className="text-base label-text text-gray-300">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered input-info w-full max-w-xs"
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>
        <GenderCheckbox/>

          <Link to="/login">Already Have An Account</Link>

          <div className="py-4">
          <button className="btn btn-sm btn-block">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
