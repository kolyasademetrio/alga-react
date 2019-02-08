import React, {Component} from 'react';
import FooterMenu from '../footer/FooterMenu/FooterMenu';
import FooterCategoryMenu from '../footer/FooterCategoryMenu/FooterCategoryMenu';

class Footer extends Component {
    render(){
        return (
            <footer id="colophon" className="footer" style={{background: 'url(uploads/2018/10/grazz.png) no-repeat center top',WebkitBackgroundSize: '100% 100%',backgroundSize: '100% 100%'}}>
                <div className="container footer__container">
                    <div className="row footer__row">
                        <div className="col-xs-12 footer__col">
                            <div className="footer__inner">
                                <div className="footer__item">
                                    <FooterMenu/>
                                </div>

                                <div className="footer__item">
                                    <a href="/shop" className="footer__itemTitleLink">Продукция</a>

                                    <FooterCategoryMenu/>
                                </div>

                                <div className="footer__item">
                                    <a href="#" className="footer__itemTitleLink">AlgaPH</a>

                                    <ul className="footer__contactsList">
                                        <li>г. Киев, пл. Спортивная 1 А,</li>
                                        <li>
                                            <a href="tel:+380997234654">+38 (099) 723-46-54</a>
                                        </li>
                                        <li>
                                            <a href="mailto:marketing@algaph.com">marketing@algaph.com</a>
                                        </li>
                                    </ul>


                                </div>

                                <div className="footer__item">
                                    <div className="footer__itemTitleLink copyright_hidden">&nbsp;</div>
                                    <div className="footer__copyright">
                                        <div>2018. ALGA PH. Разработка сайта</div>
                                        <div><a href="http://www.seotm.ua/">SEOTM Digital Agency</a>.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;