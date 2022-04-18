import './MonthlyDeals.scss'
import SingoMaple from '../../../assets/image 9.png';
import SingoEbony from '../../../assets/image 10.png';
import RakaiEbony from '../../../assets/image 11.png';
import WayKambasMiniMaple from '../../../assets/image 12.png';
import love from '../../../assets/love.svg';

const MonthlyDeals = () => {
  return (
    <div className='MonthlyDeals'>
      <span className='MonthlyDeals_title' >Monthly Deals</span>
      <hr />

      <div className='listWatch'>

        <div className='watch' >
          <img src={SingoMaple} />
          <span className='watch_title' >Singo Maple</span>
          <span>20% Off</span>

          <span>Rp 1.500.000</span>
          <span className='watch_price'>Rp 1.500.000</span>

          <div className='addCard' >
            <img src={love} />
            <a className='btnAddCard' >Add to cart</a>
          </div>
        </div>

        <div className='watch' >
          <img src={SingoEbony} />
          <span className='watch_title' >Singo Ebony</span>
          <span>20% Off</span>

          <span>Rp 1.500.000</span>
          <span className='watch_price'>Rp 1.264.000</span>

          <div className='addCard' >
            <img src={love} />
            <a className='btnAddCard' >Add to cart</a>
          </div>
        </div>

        <div className='watch'>
          <img src={RakaiEbony} />
          <span className='watch_title' >Rakai Ebony</span>
          <span>15% Off</span>

          <span>Rp 1.280.000</span>
          <span className='watch_price'>Rp 1.118.000</span>

          <div className='addCard' >
            <img src={love} />
            <a className='btnAddCard' >Add to cart</a>
          </div>
        </div>

        <div className='watch'>
          <img src={WayKambasMiniMaple} />
          <span className='watch_title' >Way Kambas Mini Maple</span>
          <span>10% Off</span>

          <span>Rp 1.280.000</span>
          <span className='watch_price'>Rp 1.024.000</span>

          <div className='addCard' >
            <img src={love} />
            <a className='btnAddCard' >Add to cart</a>
          </div>
        </div>

      </div>

    </div>
  );
};

export default MonthlyDeals;