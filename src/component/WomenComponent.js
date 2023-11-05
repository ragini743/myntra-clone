import CategoryBanner from "../banner/CategoryBanner";
import CrazyOfferBanner from "../banner/CrazyofferBanner";
import { womenCategoryImg1, womenCategoryImg10, womenCategoryImg11, womenCategoryImg12, womenCategoryImg2, womenCategoryImg3, womenCategoryImg4, womenCategoryImg5, womenCategoryImg6, womenCategoryImg7, womenCategoryImg8, womenCategoryImg9, womenImg1,womenImg2, womenImg3, womenImg4, womenImg5, womenImg6 } from "../utils/Constant";

const WomenComponent = () => {
    return(
        <div className="women">
            <h1>hello women</h1>
            <div>
                <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/10/31/410f756b-5956-4685-8e94-c5b6f7a235061698764085523-Desktop-banner--3-.jpg"alt="img"></img>
            </div>
          <CrazyOfferBanner /> 
            <div className="flex">
              <div><img src={womenImg1}alt="img"></img></div>
              <div><img src={womenImg2}alt="img"></img></div>
              <div><img src={womenImg3}alt="img"></img></div>
              <div><img src={womenImg4}alt="img"></img></div>
              <div><img src={womenImg5}alt="img"></img></div>
              <div><img src={womenImg6}alt="img"></img></div>
            </div>
            <CategoryBanner />
            <div className="grid grid-cols-6">
              <div><img src={womenCategoryImg1}alt="img"></img></div>
              <div><img src={womenCategoryImg2}alt="img"></img></div>
              <div><img src={womenCategoryImg3}alt="img"></img></div>
              <div><img src={womenCategoryImg4}alt="img"></img></div>
              <div><img src={womenCategoryImg5}alt="img"></img></div>
              <div><img src={womenCategoryImg6}alt="img"></img></div>
              <div><img src={womenCategoryImg7}alt="img"></img></div>
              <div><img src={womenCategoryImg8}alt="img"></img></div>
              <div><img src={womenCategoryImg9}alt="img"></img></div>
              <div><img src={womenCategoryImg10}alt="img"></img></div>
              <div><img src={womenCategoryImg11}alt="img"></img></div>
              <div><img src={womenCategoryImg12}alt="img"></img></div>
            </div>
        </div>
    )
}
export default WomenComponent;