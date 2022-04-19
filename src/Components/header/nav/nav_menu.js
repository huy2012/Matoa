import {useState} from 'react'
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { Link, useNavigate  } from "react-router-dom";

import './nav_menu.scss';
import logo from '../../../assets/image 5.svg';
import iconSearch from '../../../assets/search.svg';
import iconUesr from '../../../assets/iconUser.svg';
import iconCard from '../../../assets/cart.svg';
import Card_Modal from '../../Modal/Card_Modal';

const NavMenu = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
  let navigate = useNavigate();

    return (
        <div className="nav">

            <div>
                <a href={"#"} onClick={() => navigate("/")}>
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
                    <img src={iconCard} onClick={() => setIsModalVisible(isModalVisible ? false : true)} />

                    <Modal  visible={isModalVisible} footer={null} onCancel={() => setIsModalVisible(isModalVisible ? false : true)} width={1110} closable={false} >
                        <Card_Modal />
                    </Modal>
                </a>
            </div>
        </div>
    );
};

export default NavMenu;