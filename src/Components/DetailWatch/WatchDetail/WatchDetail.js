import './WatchDetail.scss'
import './RelateProducts.scss'
import image40 from '../../../assets/image 40.png';
import image41 from '../../../assets/image 41 (1).png';
import image42 from '../../../assets/image 42.png';
import image9 from '../../../assets/image 9.png';

const WatchDetail = () => {

    return (
        <div className='WatchDetail'>

            <div>
                <span>Detail</span>
                <span>Warranty</span>
                <span>Custom Engrave</span>
                <span>How to Adjust</span>
                <span>How to Care</span>
                <span>Gallery</span>
            </div>

            {/* <hr/> */}

            <div className='info_detail'>
                <h1>Material</h1>
                <p>
                    MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable.
                </p>

                <h1>Case</h1>
                <p>
                    The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.
                </p>

                <h1>Movement</h1>
                <p>
                    For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching
                </p>

                <h1>Dial</h1>
                <p>
                    In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index.
                </p>

                <h1>Hand</h1>
                <p>The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.</p>

                <h1>Important to Note</h1>
                <p className='des_end'>
                    Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.
                </p>

                <img src={image40} />
            </div>

            <div className='relateProducts'>
                <span className='relateProducts_title'>Relate Products</span>
                <hr />

                <div>
                    <div>
                        <button>20% OFF</button>
                        <img src={image9} />

                        <span>Singo Maple</span>
                        <span className='relateProducts_sale'>Rp 1.500.000</span>
                        <span className='relateProducts_price'>Rp 1.264.000</span>
                    </div>

                    <div>
                        <button  style={{backgroundColor : "#01522D"}} >NEW</button>
                        <img src={image41} />

                        <span>Sikka (Ebony & <br/> Maple)</span>
                        <span className='relateProducts_price'>Rp 1.264.000</span>
                    </div>
                    <div>
                        <img src={image42} />

                        <span>Singo Maple</span>
                        <span className='relateProducts_sale'>Rp 1.500.000</span>
                        <span className='relateProducts_price'>Rp 1.264.000</span>
                    </div>
                    <div>
                        <button>20% OFF</button>
                        <img src={image9} />

                        <span>Singo Maple</span>
                        <span className='relateProducts_sale'>Rp 1.500.000</span>
                        <span className='relateProducts_price'>Rp 1.264.000</span>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default WatchDetail;