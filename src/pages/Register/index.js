import React, { useState } from 'react'
import './register.css'

import { MdEmail, MdLock } from "react-icons/md"
import { HiEye, HiEyeOff } from "react-icons/hi"
import { BiCalendarAlt, BiUser, BiLockAlt } from "react-icons/bi"

function Register() {
   const [name, setName] = useState("")
   const [date, setDate] = useState("")
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [confirmpass, setConfirmpass] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault()
      setShow(!show);
   }

   return (
      <div className="register">
         <div className="register-logo">
            <img
               src="https://i.imgur.com/1hBDc51.png"
               alt="Nymer Quizz"
            />
         </div>

         <div className="register-right">
            <h1>Cadastrar Nymer</h1>

            <div className="register-registerInputEmail">
               <BiUser />
               <input
                  type="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
            </div>

            <div className="register-registerInputEmail">
               <MdEmail />
               <input
                  type="email"
                  placeholder="Digite um email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
            </div>
            
            <div className="register-registerInputDate">
               <BiCalendarAlt />
               <input
                  type="date"
                  placeholder="Digite sua data de nascimento"
                  value={date}
                  onChange={e => setDate(e.target.value)}
               />
            </div>

            <div className="register-registerInputPassword">
               <BiLockAlt />
               <input
                  placeholder="Digite sua senha"
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <div className="register-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <div className="register-registerInputPassword2">
               <MdLock />
               <input
                  placeholder="Confirme sua senha"
                  type={show ? "text" : "password"}
                  value={confirmpass}
                  onChange={e => setConfirmpass(e.target.value)}
               />
               <div className="register-eye">
                  {show ? (
                     <HiEye
                        size={20}
                        onClick={handleClick}
                     />
                  ) : (
                        <HiEyeOff
                           size={20}
                           onClick={handleClick}
                        />
                     )}
               </div>
            </div>

            <button type="submit">
               Cadastrar
            </button>
            <h4>Já tem conta?</h4>
         </div>
      </div>
   )
}

export default Register

