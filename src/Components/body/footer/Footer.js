import image30 from '../../../assets/image 30.png';
import Facebook from '../../../assets/Facebook.png';
import Instagram from '../../../assets/Instagram.png';
import Twitter from '../../../assets/Twitter.png';
import Youtube from '../../../assets/Youtube.png';
import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer_matoa'>
            <div className='footer_matoa_block'>

                <div className='info_company'>
                    <img src={image30} />
                    <br />
                    <span className='info_company_title'>Address</span>

                    <p>
                        Store & Office <br />
                        Jl. Setrasari Kulon III, No. 10-12,<br />
                        Sukarasa, Sukasari, Bandung,<br />
                        Jawa Barat, Indonesia 40152

                    </p>

                    <span className='info_company_hour' >Office Hour</span>
                    <p>Monday - Sunday <br /> 10.00 - 18.00</p>
                </div>

                <div className='contacts'>
                    <span className='contacts_title' >Get in touch</span>
                    <hr />

                    <div className='contacts_info'>
                        <div className='contacts_info_title'>
                            <span>Phone</span>
                            <span>Service <br /> Center</span>
                            <span>Customer <br /> Service</span>
                        </div>

                        <div className='contacts_info_value'>
                            <span>022-20277564</span>
                            <span>0811-233-8899</span>
                            <span>0811-235-9988</span>
                        </div>
                    </div>

                    <div className='contacts_icon'>
                        <img src={Facebook} />
                        <img src={Instagram} />
                        <img src={Twitter} />
                        <img src={Youtube} />
                    </div>
                </div>

                <div className='service'>
                    <span className='service_title'>Useful Link</span>
                    <hr />

                    <p>
                        Warranty & Complaints <br />
                        Order & Shipping <br />
                        Tracking Order <br />
                        About Us <br />
                        Repair <br />
                        Terms <br />
                        FAQ
                    </p>
                </div>

                <div className='service'>
                    <span className='service_title'>Campaign</span>
                    <hr />

                    <p>
                        Mengenal Arti Cukup <br/>
                        Tell Your Difference <br/>
                        Waykambas <br/>
                        Rebrand <br/>
                        Gallery <br/>
                        Singo <br/>
                        Rakai
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;