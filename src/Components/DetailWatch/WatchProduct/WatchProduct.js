import './WatchProduct.scss'
import image37 from '../../../assets/image 37.png';
import image38 from '../../../assets/image 38.png';
import image39 from '../../../assets/image 39.png';
import image6 from '../../../assets/image 6.png';
import minusSVG from '../../../assets/minus_black.svg';
import plusSVG from '../../../assets/icon_cong_white.svg';
import logoCicil from '../../../assets/logo-cicil-white 1.svg';
import imgRemoveBG from '../../../assets/image-removebg-preview 1.png';
import imgRemoveBG2 from '../../../assets/image-removebg-preview1 1.png';
import imgRemoveBG3 from '../../../assets/image-removebg-preview2 1.png';
import bgBanner from '../../../assets/RectanglewatchDetail.png';

const WatchProduct = () => {
    return (
        <div className="watchProduct">
            <span className='watchProduct_title'>Home / Product / Watches / </span>
            <span className='watchProduct_title2'>Way Kambas Mini Ebony</span>

            <div>
                <div className='watchProduct_list'>
                    <img src={image37} />
                    <img src={imgRemoveBG} />
                    <img src={imgRemoveBG2} />
                    <img src={imgRemoveBG3} />
                </div>

                <img src={image6} className='watchLarge' />

                <div className='watch_info'>
                    <h1 className='watch_info_title' >WAY KAMBAS MINI EBONY</h1>
                    <span className="watches_sales">Rp 1.280.000</span>
                    <span className="watches_price">Rp 1.280.000</span>
                    <label>Choose Model</label>
                    
                    <div style={{marginTop : "8px"}}>
                        <img src={image38} />
                        <img src={image39} style={{marginLeft : "16px"}} />
                    </div>

                    <div className='watches_pay' >
                        <img src={minusSVG} />
                        <span>1</span>
                        <img src={plusSVG} />

                        <a>Add to cart</a>

                        <img src={logoCicil} />
                    </div>
                </div>
            </div>

            <div></div>

        </div>
    );
};

export default WatchProduct;