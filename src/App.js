import React from "react";
import {useForm} from "react-hook-form";

export default function Register (){

  const {register,handleSubmit,formState}=useForm();
 
  
  const onSubmit=  (data )=> {
    alert (JSON.stringify(data))

  } 
  

  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
          <h4> REGISTRATION</h4>
          <label>
            <p>surname</p>
          <input {...register('surname') }
          type='text' 
          placeholder="surname" />
        <br/>
          <p>name</p>
          <input {...register('name') } type='text' placeholder="name"/>
            <br/>
          <p>email</p>
            <input {...register('email') } type='text' placeholder="email"/>
            <br/>
          </label>
          <br/>

        <button><h2>SEND</h2></button>
      </form>
    </div>


      )
  }
