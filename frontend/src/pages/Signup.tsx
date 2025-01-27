import { Heading } from "../compontents/Heading"
import Subheading from "../compontents/Subheading"


function Signup() {
  return (
    <div className="bg-gray-600 h-screen flex justify-center items-center">
      <div className="container mx-auto p-12 bg-gray-200  w-fit h-fit flex justify-center items-center rounded-lg ">
        <div className="flex flex-col justify-center items-center">

          <Heading labels="Sign Up" />
          <Subheading labels="Create an account to continue" />
        

        </div>


      </div>
      </div>
      )
}

      export default Signup
