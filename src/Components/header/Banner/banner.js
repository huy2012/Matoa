import './banner.scss'
import dongHO from '../../../assets/dongho.svg';
import btnPrevios from '../../../assets/Frame 2.svg';
import btnNext from '../../../assets/Frame 1.svg';
import addCard from '../../../assets/add-cart.svg';
import logoCicil from '../../../assets/logo-cicil-white 1.svg';

const Banner = () => {
    return (
        <div className='Banner' >

            <img src={dongHO} />

            <div>
                <h1>
                    WAY KAMBAS <br />
                    MINI EBONY
                </h1>
                <hr/>
                <p>
                    MATOA Way Kambas - This wood is chosen to represent the <br />
                    Sumatran Rhino's skin which is designed with an overlap effect on its <br />
                    strap to represent Rhino's skin.
                </p>

                <span>Discover</span>

                <div className='btns'>
                    <a>
                        <img src={addCard} />
                        <span className='btn_Add_Card'>Add to cart</span>
                    </a>
                    <a>
                        <img src={logoCicil} />
                    </a>
                </div>
            </div>

            <div>
                <a>
                    <img src={btnPrevios} />
                </a>
                <a>
                    <img src={btnNext} />
                </a>
            </div>

        </div>
    );
};

export default Banner;