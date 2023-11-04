import { img1, img2, img3, img4, img5, img6 } from "../utils/Constant";
const CrazyOffer =() =>{
    return(
        <div>
            <div>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/31/0789c8ea-d6a2-46ba-aad0-2264ab0e3f871698733226600-OMG-Deals.jpg"alt="loading"></img>
            </div>
            <div className="flex overflow-visible mt-8">
                <a href="#v" ><img src={img1}  alt="img"></img></a>
                <a href="#v"><img src={img2} alt="img"></img></a>
                <a href="#v"><img src={img3} alt="img"></img></a>
                <a href="#v"><img src={img4} alt="img"></img></a>
                <a href="#v"><img src={img5} alt="img"></img></a>
                <a href="#v"><img src={img6} alt="img"></img></a>
                {/* <a href="#v"><img src={img1} alt="img"></img></a>
                <a href="#v"><img src={img2} alt="img"></img></a>
                <a href="#v"><img src={img3} alt="img"></img></a>
                <a href="#v"><img src={img4} alt="img"></img></a>
                <a href="#v"><img src={img5} alt="img"></img></a>
                <a href="#v"><img src={img6} alt="img"></img></a> */}
                </div>
        </div>
    )
}
export default CrazyOffer;