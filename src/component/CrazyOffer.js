import CrazyOfferBanner from "../banner/CrazyofferBanner";
import { img1, img2, img3, img4, img5, img6 } from "../utils/Constant";
const CrazyOffer =() =>{
    return(
        <div>
           <CrazyOfferBanner />
            <div className="flex overflow-visible mt-8">
                <a href="#v" ><img src={img1}  alt="img"></img></a>
                <a href="#v"><img src={img2} alt="img"></img></a>
                <a href="#v"><img src={img3} alt="img"></img></a>
                <a href="#v"><img src={img4} alt="img"></img></a>
                <a href="#v"><img src={img5} alt="img"></img></a>
                <a href="#v"><img src={img6} alt="img"></img></a>
     
                </div>
        </div>
    )
}
export default CrazyOffer;