import './Category.scss'
import image15 from '../../../assets/image 15.png';
import image21 from '../../../assets/image 21.png';
import image16 from '../../../assets/image 16.png';
import image20 from '../../../assets/image 20.png';
import image22 from '../../../assets/image 22.png';
import image23 from '../../../assets/image 23.png';
import image17 from '../../../assets/image 17.png';
import image18 from '../../../assets/image 18.png';
import image19 from '../../../assets/image 19.png';

const Category = () => {
    return (
        <div>
            <div className='category'>

                <div className='watch' >
                    <span className='category_title'>Maple Series</span>
                    <hr />

                    <div>

                        <div>
                            <div className='category_img' >
                                <img src={image15} />
                            </div>

                            <div>
                                <span>Way Kambas Maple</span>
                                <span className='category_price' >Rp 1.280.000</span>
                            </div>
                        </div>

                        <div>
                            <div className='category_img' >
                                <img src={image21} />
                            </div>

                            <div>
                                <span>Kaili</span>
                                <span className='category_price' >Rp 950.000</span>
                            </div>
                        </div>

                        <div>
                            <div className='category_img' >
                                <img src={image16} />
                            </div>

                            <div>
                                <span>Kaili</span>
                                <span className='category_price' >Rp 950.000</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/*  */}
                <div className='watch' >
                    <span className='category_title'>Ebony Series</span>
                    <hr />

                    <div>

                        <div>
                            <div className='category_img' >
                                <img src={image20} />
                            </div>

                            <div>
                                <span>Tomia Ebony</span>
                                <span className='category_sales' >Rp 1.280.000</span>
                                <span className='category_price' >Rp 960.000</span>
                            </div>
                        </div>

                        <div>
                            <div className='category_img' >
                                <img src={image22} />
                            </div>

                            <div>
                                <span>Mori</span>
                                <span className='category_price' >Rp 950.000</span>
                            </div>
                        </div>

                        <div>
                            <div className='category_img' >
                                <img src={image23} />
                            </div>

                            <div>
                                <span>Alor</span>
                                <span className='category_price' >Rp 1.170.000</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/*  */}
                <div className='watch' >
                    <span className='category_title'>Featured</span>
                    <hr />

                    <div>

                        <div>
                            <div className='category_img' >
                                <img src={image17} />
                            </div>

                            <div>
                                <span>Sikka (Ebony & Maple)</span>
                                <span className='category_price' >Rp 1.198.000</span>
                            </div>
                        </div>

                        <div>
                            <div className='category_img' >
                                <img src={image18} />
                            </div>

                            <div>
                                <span>Lore Walnut</span>
                                <span className='category_price' >Rp 1.280.000</span>
                            </div>
                        </div>

                        <div>
                            <div className='category_img' >
                                <img src={image19} />
                            </div>

                            <div>
                                <span>Way Kambas Limited Edition</span>
                                <span className='category_price' >Rp 1.170.000</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className='category_btn'>
                <hr />
                <div>
                    <a>See More</a>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Category;