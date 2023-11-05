import CategoryBanner from "../banner/CategoryBanner";
import CrazyOfferBanner from "../banner/CrazyofferBanner";
import { menBanner, womenBanner, womenImg2 ,womenImg1, mainContainerImg} from "../utils/Constant";
import { img1,img2,img6,img5 } from "../utils/Constant";
const MainContainer =() =>{
    return(
        <div>
            <div className="flex w-full">
            <div className="w-1/2"><img className="w-full object-contain"src={womenBanner}alt="img"></img></div>
            <div className="w-1/2"><img className="w-full object-contain"src={menBanner}alt="img"></img></div>
            </div>
            <CrazyOfferBanner />
            <div className="flex overflow-visible mt-8">
            <a href="#v" ><img src={img1}  alt="img"></img></a>
            <a href="#v"><img src={img6} alt="img"></img></a>
            <a href="#v"><img src={img5} alt="img"></img></a>
            <a href="#v"><img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/30/0cceca99-c9c8-42a1-9d03-8c0c8a38407e1698683954453-image_png_812979694.png"alt="img"></img></a>
           <a href="#v"> <img src={womenImg1}alt="img"></img></a>
           <a href="#v"> <img src={womenImg2}alt="img"></img></a>
            </div>
            <CategoryBanner />
            <div className="grid grid-cols-6">
             {mainContainerImg.map((img)=>(<div key={(img)}><img src={img}alt="img"></img></div>)) }   
            </div>
        </div>
    )
}
export default MainContainer ;