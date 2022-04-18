import './RecentNews.scss'
import image13 from '../../../assets/image 13.png';
import image14 from '../../../assets/bgRecentNews.png';

const RecentNews = () => {
  return (
    <div className="recentNews" >
      <span className="recentNews_title" >Recent News</span>
      <hr />

      <div className='recentNews_introduce'>
        <div>
          <span>Where To Travel</span>
          <span>Matoa Where To <br /> Travel? Yogyakarta</span>

          <a>Discover</a>
        </div>

        <div>
          <div>
            <img src={image13} />
          </div>
          {/* <img src={image14} /> */}
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default RecentNews;