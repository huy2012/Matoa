import './Card_Modal.scss';
import './CardPayment.scss';
import image41 from '../../assets/image 41.png';
import minus from '../../assets/minus.png';
import minusSVG from '../../assets/minus.svg';
import plusCong from '../../assets/plus.png';
import plusCongSVG from '../../assets/plus.svg';
import trash from '../../assets/trash.png';
import trashSVG from '../../assets/trash.svg';
import image17 from '../../assets/image 17.png';
import minus2SVG from '../../assets/Vector 5.svg';

const Card_Modal = () => {
    return (
        <div className='modal_card' >

            <div className='modal_card_item1'>
                <div className='item_card_img' >
                    <img src={image41} />
                </div>

                <div className='item_card_info'>
                    <span className='item_card_title'>Way Kambas Mini Ebony</span>
                    <span className='item_card_sale'>Rp 1.280.000</span>
                    <span className='item_card_price'>Rp 1.024.000</span>
                    <span className='item_card_des'>Custom Engrave </span>
                    <span className='item_card_des2' >“Happy | Birthday | from”</span>
                </div>

                <div className='item_card_edit'>
                    <label className='item_card_label'>Select Packaging</label>
                    <select className='item_card_select'>
                        <option>Wooden Packaging (Rp 50.000)</option>
                    </select>

                    <div className='item_card_amount'>
                        <img src={minusSVG} className='icon_minus' />
                        <span className='item_amount'>2</span>
                        <img src={plusCongSVG} className='icon_plusCong' />

                        <span className='item_price'>Rp 2.048.000</span>

                        <img src={trashSVG} className='icon_trash' />
                    </div>
                </div>

                <hr />

            </div>

            <div className='modal_card_item1'>
                <div className='item_card_img' >
                    <img src={image17} />
                </div>

                <div className='item_card_info'>
                    <span className='item_card_title'>Sikka (Ebony & Maple)</span>
                    <span className='item_card_price' style={{ marginTop: "16px" }}>Rp 1.264.000</span>
                </div>

                <div className='item_card_edit'>
                    <label className='item_card_label'>Select Packaging</label>
                    <select className='item_card_select'>
                        <option>Default Packaging (Free)</option>
                    </select>

                    <div className='item_card_amount'>
                        <img src={minusSVG} className='icon_minus'  />
                        <span className='item_amount'>1</span>
                        <img src={plusCongSVG} className='icon_plusCong' />

                        <span className='item_price'>Rp 1.264.000</span>

                        <img src={trashSVG} className='icon_trash' />
                    </div>
                </div>

                <hr />

            </div> {/**end list  */}

            <div className='card_info_payment'>
                <span>Kode Promo</span>
                <input placeholder='INDONESIA' />
                <span>35% OFF</span>

                <div>
                    <span>Subtotal</span>
                    <div>
                        <span>Rp 3.312.000</span>
                        <span>Rp 2.152.000</span>
                    </div>
                </div>
            </div>

            <button className='btn_checkOut' onClick={() => alert("ok")} >Checkout</button>

        </div>
    );
};

export default Card_Modal;