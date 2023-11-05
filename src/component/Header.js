import { useEffect, useState } from "react";
import { myntra_Logo, searchResultAPI } from "../utils/Constant"
import { Link } from "react-router-dom";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

const Header = () =>{
    const [searchSuggestion,setSearchSuggestion]=useState([])
    const [searchQuery,setSearchQuery] = useState("")
    useEffect(()=>{getSearchSuggestion()},[searchQuery])
    const getSearchSuggestion=async () =>{
const data=await fetch(searchResultAPI+searchQuery);
const json =await data.json;
console.log("json",json)
    }
    console.log("searchQuery",searchQuery)






    return(
        <div className="p-4 fixed bg-white flex top-0 items-center  w-[100%] justify-evenly">
            
            <div className="w-[5%]">
                <img src={myntra_Logo} alt="logo"></img>
            </div>
            <div className=" md:flex justify-evenly md:w-[40%]">
                <div className="mr-2 ml-2">
                    <Link to="/men">MEN</Link>
                    </div>
                <div className="mr-2 ml-2"><Link to ="/women">WOMEN</Link></div>
                <div className="mr-2 ml-2"><a href="#kids">KIDS</a></div>
                <div className="mr-2 ml-2"><a href="# home  and decor">HOME & LIVING</a></div>
                <div className="mr-2 ml-2"><a href="#beuty">BEAUTY</a></div>
                <div className="mr-2 ml-2"><a href="# studio">STUDIO</a></div>
            </div>
            <div className="border-gray-300 border-2 md:mr-6 md:w-[30%]">
                <input type="text"placeholder="search for products.."className="w-full bg-gray-200 text-black opacity-100 p-2"
                value={searchQuery} onChange={(e)=>(setSearchQuery(e.target.value))}
                ></input>
            </div>
            <div className="md:flex md:w-25% md:justify-evenly">
                <div className="flex flex-col items-center mr-2">
                    <div className="w-5">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"alt="pick"></img>
                    </div>
                    <h2 className="text-xs font-bold">Profile</h2>
                </div>
                <div className="flex flex-col mr-2 items-center ">
                    <div className="w-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsAdkcI8R_X5GDnPcOrn-uaBN_FYmp--5Cg&usqp=CAU"alt="pick"></img>
                    </div>
                    <h2 className="text-xs font-bold">WhishList</h2>
                </div>
                <div className="flex flex-col mr-2 items-center ">
                    <div className="w-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRouq-PipK_Pyk0sDEEesJ6TmSuKdwm3opxIg&usqp=CAU"alt="pick"></img>
                    </div>
                    <h2 className="text-xs font-bold">Bag</h2>
                </div>
                <div className="searchSuggestion"></div>
            </div>
        </div>
    )
}
export default Header;