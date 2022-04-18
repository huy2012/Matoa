import './Testimonials.scss'
import image24 from '../../../assets/image 24.png';
import Vector4 from '../../../assets/Vector 4.png';
import Vector5 from '../../../assets/Vector 4 (1).png';

const Testimonials = () => {
  return(
      <div className='testimonials'>

          <div className='testimonials_view' >
              <img src={image24} />
              <div>
                  <img src={Vector5} />
                  <img src={Vector4} />
              </div>
          </div>

          <div className='testimonials_introduce' >
              <span className={'testimonials_title'} >Testimonials</span>
              <hr/>

              <p>
              Loving my new KAILI watch from @matoa_id, the first ever <br/> Indonesian watch local brand that uses wood as their main <br/> material. Like any other Matoa products, KAILI is inspired by <br/> Indonesian heritage.
              </p>

              <h3>Gita Savitri</h3>
              <span className='testimonials_note' >Content Creator/Influencer</span>
          </div>

      </div>
  );          
};

export default Testimonials;