import './nav_menu.scss';
import logo from '../../../assets/image 5.svg';
import iconSearch from '../../../assets/search.svg';
import iconUesr from '../../../assets/iconUser.svg';
import iconCard from '../../../assets/cart.svg';

const NavMenu = () => {
    return (
        <div className="nav">

            <div>
                <a href={"#"} >
                    <img src={logo} alt="error" />
                </a>
            </div>

            <ul>
                <li><a href={"#"} >Watches</a></li>
                <li><a href={"#"} >Eyewear</a></li>
                <li><a href={"#"} >Accessories</a></li>
                <li><a href={"#"} >News</a></li>
            </ul>

            <div>
                <a>
                    <img src={iconSearch} />
                </a>

                <div>
                    <img src={iconUesr} />
                    <a>Log In</a>
                </div>

                <a>
                    <img src={iconCard} />
                </a>
            </div>
        </div>
    );
};

export default NavMenu;