
import { Outlet } from "react-router-dom";
// import MainContainer from "./MainContainer";


const Body =() =>{
    return(
        <div >
            {/* <MainContainer /> */}
            <Outlet />
         
           
        </div>
    )
}
export default Body ;