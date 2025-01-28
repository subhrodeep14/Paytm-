import { Appbar } from "../compontents/Appbar"
import { Balance } from "../compontents/Balance"
import { Users } from "../compontents/Users"


const Dashboard = () => {
  return (
    <div className="bg-slate-100 h-screen p-3 m-3">
      <Appbar/>
      <div>
        <Balance value="10000000000000"/>
        <Users/>
      </div>
      
    </div>
  )
}

export default Dashboard
