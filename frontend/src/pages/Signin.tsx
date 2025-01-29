import { useState } from "react"
import { BottomWarning } from "../compontents/BottomWarning"
import { Button } from "../compontents/Button"
import { Heading } from "../compontents/Heading"
import { InputBox } from "../compontents/InputBox"
import Subheading from "../compontents/Subheading"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName,setFirstName]=useState("");
  const navigate=useNavigate();


  return (
    <div>
      <div className="bg-slate-500 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      
                <Heading labels="Sign In" />
                <Subheading labels="Create an account to continue" />
                <InputBox onChange={(e)=>{
                  setFirstName(e.target.value);
                }} label="FirstName" placeholder="John"/>
                <InputBox onChange={(e)=>{
                  setUsername(e.target.value);
                }} label="Username" placeholder="john@gmail.com"  />
                <InputBox onChange={(e)=>{
                  setPassword(e.target.value);
                }} label="Password" placeholder="********"  />
                
                <Button label="Sign in" onClick={async() => {
                const response= await axios.post("http://localhost:3000/api/v1/user/signin", { username,password,firstName })
                localStorage.setItem("token",response.data.token)
                if(response.status===200){
                  navigate("/dashboard");
                }}
               } />
                <BottomWarning label="Already have not an account?" buttonText="signup" to="/signup" />
              
      
              </div>
      
      
            </div>
            </div>
      
    </div>
  )
}

export default Signin
