'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React from "react";
import { IsAdminContext } from '@/context/IsAdminContext';
//import Interface_db from '@/database/queries';
//import db from "@/database/db"


/*
<IsAdminContext.Provider value={{isAdmin, setIsAdmin}}> 
</IsAdminContext.Provider>
import { BlogsContext, IsAdminContext } from '../App/App.js'
const { isAdmin, setIsAdmin } = React.useContext( IsAdminContext);
*/

export default function Login() {
  const {isAdmin, setIsAdmin} = React.useContext(IsAdminContext);

  function handleSubmit(e) {
    console.log(e)
  }

  return (
    <div> 
      <h1> Login </h1>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="login-name-input"> Name </label>
        <input type="text" id="login-name-input" /> 
        <label htmlFor="login-password-input"> Password </label>
        <input type="text" id="login-password-input" /> 
        
      </form>
      <button> Submit </button>


    </div>
    )
    // login as user/admin
    // if user, no data asked
    // if admin, name + password
    // + create context for isAdmin
       
}
