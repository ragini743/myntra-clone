import CategoryBanner from "../banner/CategoryBanner";
import { categoryIMG1, categoryIMG10, categoryIMG2,categoryIMG3, categoryIMG4, categoryIMG5, categoryIMG6, categoryIMG7, categoryIMG8, categoryIMG9 } from "../utils/Constant";

const Category = () =>{
    return(
        <div>
           <CategoryBanner />
            <div className="grid grid-cols-5 gap-6">
                <div className="flex justify-center items-center"><img className="w-full" src={categoryIMG1}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full" src={categoryIMG4}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full" src={categoryIMG3}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full" src={categoryIMG4}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full" src={categoryIMG5}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full"src={categoryIMG8}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full"src={categoryIMG4}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full"src={categoryIMG10}alt="img"></img></div>

                <div className="flex justify-center items-center"><img className="w-full"src={categoryIMG9}alt="img"></img></div>
                <div className="flex justify-center items-center"><img className="w-full"src={categoryIMG7}alt="img"></img></div>
                <div></div>
            </div>
        </div>
    )
}
export default Category;
