import './MonthlyDeals.scss'
import SingoMaple from '../../../assets/image 9.png';

const MonthlyDeals = () => {
  return(
      <div className='MonthlyDeals'>
          <span className='MonthlyDeals_title' >Monthly Deals</span>
          <hr/>

          <div className='listWatch'>
            <div>
                <img src={SingoMaple} />
                <span className='watch_title' >Singo Maple</span>
                <span>20% Off</span>

                <span>Rp 1.500.000</span>
                <span className='watch_price'>Rp 1.500.000</span>
            </div>
          </div>
      </div>
  );          
};

export default MonthlyDeals;