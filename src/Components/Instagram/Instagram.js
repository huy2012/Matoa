import './Instagram.scss'
import rectangle38 from '../../assets/Rectangle 38.png';
import rectangle39 from '../../assets/Rectangle 39.png';
import rectangle40 from '../../assets/Rectangle 40.png';
import rectangle41 from '../../assets/Rectangle 41.png';
import rectangle42 from '../../assets/Rectangle 42.png';

const Instagram = () => {
    return (
        <div className='instagram'>
            <span className='instagram_title'>Instagram</span>
            <hr/>
            <div>
                <img src={rectangle38} />
                <img src={rectangle39} />
                <img src={rectangle40} />
                <img src={rectangle41} />
                <img src={rectangle42} />
            </div>
        </div>
    );
};

export default Instagram;