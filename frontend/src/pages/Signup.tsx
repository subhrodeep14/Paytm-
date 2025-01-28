import { useState } from "react"
import { BottomWarning } from "../compontents/BottomWarning"
import { Button } from "../compontents/Button"
import { Heading } from "../compontents/Heading"
import { InputBox } from "../compontents/InputBox"
import Subheading from "../compontents/Subheading"
import axios from "axios"
import { Link } from "react-router-dom"


function Signup() {
  const [username, setUsername] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="bg-slate-500 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">

          <Heading labels="Sign Up" />
          <Subheading labels="Create an account to continue" />
          <InputBox onChange={(e)=>{
            setUsername(e.target.value)
          }} label="Email" placeholder="JohnDoe@gmail.com" />
          <InputBox onChange={(e)=>{
            setFirstName(e.target.value)
            
          }} label="Firstname" placeholder="John"/>
          <InputBox onChange={(e)=>{
            setLastName(e.target.value)

          }} label="LastName" placeholder="Doe"  />
          <InputBox onChange={(e)=>{
            setPassword(e.target.value)
          }} label="Password" placeholder="********"  />
          
          <Button label="Sign Up" onClick={async() => {
           const response=await axios.post("http://localhost:3000/api/v1/user/signup", {  username, firstName, lastName, password })
            console.log(username, firstName, lastName, password);
            localStorage.setItem("token", response.data.token);
            if (response.status === 200) {
              window.location.href = "/dashboard"
            }
            
          }} />
          <BottomWarning label="Already have an account?" buttonText="Login" to="/signin" />
          

        

        </div>
        


      </div>
      </div>
      )
}

      export default Signup
