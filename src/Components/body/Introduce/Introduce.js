import './introduce.scss'
import kinh from '../../../assets/image 7.png';
import dongHo from '../../../assets/image 8.png';

const Introduce = () => {
    return (
        <div className='introduce'>
            <div>
                <div className='introduce_title'>
                    <span>Luxurious</span>
                    <span> Eyewear</span>

                    <p className='introduce_body'>See the beauty of exotic world with the <br/> luxurious glasses</p>

                    <span className='introduce_btn'>Discover Now</span>
                </div>


                <img src={kinh} />
            </div>

            <div>
                <div className='introduce_title'>
                    <span>Comfortable</span>
                    <span> Watches</span>
                    <p className='introduce_body'>Feels the balancing function and beauty in <br/> our wooden watches</p>

                    <span className='introduce_btn'>Discover Now</span>
                </div>


                <img src={dongHo} />
            </div>
        </div>
    );
};

export default Introduce;