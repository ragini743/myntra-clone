import { womenImg1,womenImg2, womenImg3, womenImg4, womenImg5, womenImg6, womenImg7, womenImg8 } from "../utils/Constant";
const WomenComponent = () => {
    return(
        <div className="women">
            <h1>hello women</h1>
            <div>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/31/410f756b-5956-4685-8e94-c5b6f7a235061698764085523-Desktop-banner--3-.jpg"alt="img"></img>
            </div>
            <div>
                <img src="https://assets.myntassets.com/f_webp,w_980,c_limit…46ba-aad0-2264ab0e3f871698733226600-OMG-Deals.jpg"alt="img"></img>
                </div>
            <div className="flex">
              <div><img src={womenImg1}alt="img"></img></div>
              <div><img src={womenImg2}alt="img"></img></div>
              <div><img src={womenImg3}alt="img"></img></div>
              <div><img src={womenImg4}alt="img"></img></div>
              <div><img src={womenImg5}alt="img"></img></div>
              <div><img src={womenImg6}alt="img"></img></div>
            
            </div>
        </div>
    )
}
export default WomenComponent;