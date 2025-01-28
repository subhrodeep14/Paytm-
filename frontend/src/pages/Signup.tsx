import { Heading } from "../compontents/Heading"
import { InputBox } from "../compontents/InputBox"
import Subheading from "../compontents/Subheading"


function Signup() {
  return (
    <div className="bg-gray-600 h-screen flex justify-center items-center">
      <div className="container mx-auto p-12 bg-gray-200  w-fit h-fit flex justify-center items-center rounded-lg ">
        <div className="flex flex-col justify-center items-center">

          <Heading labels="Sign Up" />
          <Subheading labels="Create an account to continue" />
          <InputBox labels="Name" placeholder="John"/>
          <InputBox labels="Email" placeholder="john@gmail.com"  />
          <InputBox labels="Password" placeholder="********"  />
          
          <button className="bg-blue-500 text-white p-2 rounded-lg w-1/2">Sign Up</button>
        

        </div>


      </div>
      </div>
      )
}

      export default Signup
