import { BottomWarning } from "../compontents/BottomWarning"
import { Button } from "../compontents/Button"
import { Heading } from "../compontents/Heading"
import { InputBox } from "../compontents/InputBox"
import Subheading from "../compontents/Subheading"


const Signin = () => {
  return (
    <div>
      <div className="bg-slate-500 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
              <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      
                <Heading labels="Sign In" />
                <Subheading labels="Create an account to continue" />
                <InputBox label="Name" placeholder="John"/>
                <InputBox label="Email" placeholder="john@gmail.com"  />
                <InputBox label="Password" placeholder="********"  />
                
                <Button label="Sign in" onClick={() => {}} />
                <BottomWarning label="Already have not an account?" buttonText="signup" to="/signup" />
              
      
              </div>
      
      
            </div>
            </div>
      
    </div>
  )
}

export default Signin
