import React, { Component } from 'react';

class ShopPage extends Component {
    render(){
        return (
            <div className="container woocomm__container">
                <div className="row woocomm__row">
                    <div className="col-xs-12">
                        <div className="woocomm__col">
                            <div className="kama_breadcrumbs" itemScope="" itemType="http://schema.org/BreadcrumbList">
                                <span itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem"><a  href="" itemProp="item"><span
                                    itemProp="name">Главная</span></a></span><span className="kb_sep"> / </span>
                                Ассортимент
                            </div>
                            <div className="products__wrapper">
                                <div className="products__sidebar">
                                    <div className="products__categories">
                                        <div className="products__categoryHeader">
                                            <div className="products__categoryTitle">
                                                Ассортимент продуктов
                                            </div>
                                            <a href="#products__categoryList" className="products__categoryMenuBtn"></a>
                                        </div>

                                        <ul className="products__categoryList" id="products__categoryList">
                                            <li className="products__categoryItem">
                                                <a href="/shop"
                                                   className="products__categoryItemLink all__categories active">
                                                    Весь ассортимент
                                                </a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/%d1%81%d0%ba%d1%80%d0%b0%d0%b1%d1%8b/"
                                                   className="products__categoryItemLink">
                                                    Скрабы </a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/%d1%85%d0%b8%d1%82-%d0%bf%d1%80%d0%be%d0%b4%d0%b0%d0%b6/"
                                                   className="products__categoryItemLink">
                                                    Хит продаж </a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/cosmeticiviso/"
                                                   className="products__categoryItemLink">
                                                    Косметика для лица </a>
                                            </li>
                                            <li className="products__categoryItem">
                                                <a href="/product-category/setregalo/"
                                                   className="products__categoryItemLink">
                                                    Косметика для тела </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="products__content">
                                    <div className="products__contentHeader">
                                        <div className="products__contentHeaderTitle">
                                            Весь ассортимент

                                        </div>

                                        <div className="products__contentHeaderFilter">
                                            <span
                                                className="products__contentHeaderFilterText">Сортировать по: Цене</span>
                                            <span className="products__contentHeaderFilterLinks">
                                                                        <ul name="orderby" className="orderby">
                            <li>
                                <a href="/shop/?orderby=price"></a>
                            </li>
                            <li>
                                <a href="/shop/?orderby=price-desc"></a>
                            </li>
                        </ul>


                    </span>
                                        </div>
                                    </div>


                                    <div className="products__list">


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/180-g_scrub-cream__01-600x587.jpg"
                                                             data-id="891"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Скраб-крем апельсин
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        сахарный крем-скраб 180 г
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d0%ba%d1%80%d0%b5%d0%bc-%d1%81%d0%ba%d1%80%d0%b0%d0%b1/"
                                                           className="good__itemDescrTitle">
                                                            Скраб-крем апельсин </a>

                                                        <a href="/product/%d0%ba%d1%80%d0%b5%d0%bc-%d1%81%d0%ba%d1%80%d0%b0%d0%b1/"
                                                           className="good__itemDescrText">
                                                            Крем-скраб </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">75</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=891" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="891" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/180-g_scrub-cream__02-600x587.jpg"
                                                             data-id="903"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Скраб-крем клубника
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        сахарный крем-скраб 180 г
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%ba%d0%bb%d1%83%d0%b1%d0%bd%d0%b8%d0%ba%d0%b0/"
                                                           className="good__itemDescrTitle">
                                                            Скраб-крем клубника </a>

                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%ba%d0%bb%d1%83%d0%b1%d0%bd%d0%b8%d0%ba%d0%b0/"
                                                           className="good__itemDescrText">
                                                            Крем-скраб </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">75</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=903" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="903" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/180-g_scrub-cream__03-600x587.jpg"
                                                             data-id="906"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Скраб-крем дыня
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        сахарный крем-скраб 180 г
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%b4%d1%8f%d0%bd%d1%8f/"
                                                           className="good__itemDescrTitle">
                                                            Скраб-крем дыня </a>

                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%b4%d1%8f%d0%bd%d1%8f/"
                                                           className="good__itemDescrText">
                                                            Крем-скраб </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">75</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=906" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="906" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/180-g_scrub-cream__04-600x587.jpg"
                                                             data-id="908"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Скраб-крем ананас
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        сахарный крем-скраб 180 г
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%b0%d0%bd%d0%b0%d0%bd%d0%b0%d1%81/"
                                                           className="good__itemDescrTitle">
                                                            Скраб-крем ананас </a>

                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%b0%d0%bd%d0%b0%d0%bd%d0%b0%d1%81/"
                                                           className="good__itemDescrText">
                                                            Крем-скраб </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">75</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=908" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="908" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/180-g_scrub-cream__05-600x587.jpg"
                                                             data-id="910"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Скраб-крем красные ягоды
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        сахарный крем-скраб 180 г
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%ba%d1%80%d0%b0%d1%81%d0%bd%d1%8b%d0%b5-%d1%8f%d0%b3%d0%be%d0%b4%d1%8b/"
                                                           className="good__itemDescrTitle">
                                                            Скраб-крем красные ягоды </a>

                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d0%ba%d1%80%d0%b0%d1%81%d0%bd%d1%8b%d0%b5-%d1%8f%d0%b3%d0%be%d0%b4%d1%8b/"
                                                           className="good__itemDescrText">
                                                            Крем-скраб </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">75</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=910" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="910" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/180-g_scrub-cream___06-600x587.jpg"
                                                             data-id="912"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Скраб-крем фруктовый микс
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        сахарный крем-скраб 180 г
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d1%84%d1%80%d1%83%d0%ba%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%bc%d0%b8%d0%ba%d1%81/"
                                                           className="good__itemDescrTitle">
                                                            Скраб-крем фруктовый микс </a>

                                                        <a href="/product/%d1%81%d0%ba%d1%80%d0%b0%d0%b1-%d0%ba%d1%80%d0%b5%d0%bc-%d1%84%d1%80%d1%83%d0%ba%d1%82%d0%be%d0%b2%d1%8b%d0%b9-%d0%bc%d0%b8%d0%ba%d1%81/"
                                                           className="good__itemDescrText">
                                                            Крем-скраб </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">75</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=912" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="912" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/10/250ml_1_07-600x587.jpg"
                                                             data-id="941"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Крем для рук и ногтей
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        питательный крем 250 мл
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d0%ba%d1%80%d0%b5%d0%bc-%d0%b4%d0%bb%d1%8f-%d1%80%d1%83%d0%ba-%d0%b8-%d0%bd%d0%be%d0%b3%d1%82%d0%b5%d0%b9-%d0%ba%d0%bb%d1%83%d0%b1%d0%bd%d0%b8%d0%ba%d0%b0/"
                                                           className="good__itemDescrTitle">
                                                            Крем для рук и ногтей </a>

                                                        <a href="/product/%d0%ba%d1%80%d0%b5%d0%bc-%d0%b4%d0%bb%d1%8f-%d1%80%d1%83%d0%ba-%d0%b8-%d0%bd%d0%be%d0%b3%d1%82%d0%b5%d0%b9-%d0%ba%d0%bb%d1%83%d0%b1%d0%bd%d0%b8%d0%ba%d0%b0/"
                                                           className="good__itemDescrText">
                                                            Крем для рук и ногтей </a>


                                                    </div>


                                                    <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">115</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                    </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=941" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="941" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/08/5-ml_0001-600x587.jpg"
                                                             data-id="107"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Детский крем
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        гипоалергенный крем 5 мл
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d0%bf%d0%b8%d1%82%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%ba%d1%80%d0%b5%d0%bc-3/"
                                                           className="good__itemDescrTitle">
                                                            Детский крем </a>

                                                        <a href="/product/%d0%bf%d0%b8%d1%82%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%ba%d1%80%d0%b5%d0%bc-3/"
                                                           className="good__itemDescrText">
                                                            Гипоаллергенный крем Alga Ph великолепно подойдет для особо
                                                            чувствительной нежной кожи. Крем быстро заживляет и
                                                            увлажняет кожу, а его состав дает возможность использоваться
                                                            крем с первых месяцев жизни. </a>


                                                        <a className="good__video"
                                                           href="https://www.youtube.com/watch?v=Df-Wo48P-M8"
                                                           target="_blank">
                                                            <img className="good__videoImg"
                                                                 src="uploads/2018/08/youtube.png"
                                                                 data-id="107"/>
                    <span className="good__videoText">
                        Видеообзор                    </span>
                                                        </a>
                                                    </div>

                                                    <img className="good__itemImageLabel"
                                                         src="uploads/2018/08/icons-03.png"
                                                         data-id="107"/>

                                                        <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">185</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                        </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=107" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="107" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="good__item">
                                            <div className="good__itemInner">
                                                <div className="good__itemContent">
                                                    <div className="good__itemHeader">
                                                        <img className="good__itemImage"
                                                             src="uploads/2018/08/5-ml_0003-600x587.jpg"
                                                             data-id="98"/>
                                                    </div>

                                                    <div className="good__itemTitle">
                                                        Увлажняющий крем
                                                    </div>

                                                    <div className="good__itemExcerpt">
                                                        дневной увлажняющий крем 5 мл
                                                    </div>

                                                    <div className="good__itemDescr">
                                                        <a href="/product/%d0%bf%d0%b8%d1%82%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%ba%d1%80%d0%b5%d0%bc/"
                                                           className="good__itemDescrTitle">
                                                            Увлажняющий крем </a>

                                                        <a href="/product/%d0%bf%d0%b8%d1%82%d0%b0%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b9-%d0%ba%d1%80%d0%b5%d0%bc/"
                                                           className="good__itemDescrText">
                                                            Дневной увлажняющий крем AlgaPh не просто удерживает влагу,
                                                            но и заставляет ее работать на кожу. <br/>
                                                            Крем притягивают влагу извне, замедляют процесс ее испарения
                                                            и усиливают защитный барьер эпидермиса. </a>

                                                        <a className="good__socFeed"
                                                           href="https://www.facebook.com/MyLPGBody/" target="_blank">
                                                            <img className="good__socFeedImg"
                                                                 src="uploads/2018/09/icons_v-05.png"
                                                                 data-id="98"/>
                    <span className="good__socFeedText">
                        Отзыв                    </span>
                                                        </a>

                                                        <a className="good__video"
                                                           href="https://www.youtube.com/watch?v=nCkpzqqog4k&amp;start_radio=1&amp;list=RDnCkpzqqog4k"
                                                           target="_blank">
                                                            <img className="good__videoImg"
                                                                 src="uploads/2018/08/youtube.png"
                                                                 data-id="98"/>
                    <span className="good__videoText">
                        Видообзор                    </span>
                                                        </a>
                                                    </div>

                                                    <img className="good__itemImageLabel"
                                                         src="uploads/2018/08/icons-01.png"
                                                         data-id="98"/>

                                                        <div className="good__itemPrices">
                                    <span className="good__itemRegularPrice">
                        <span className="good__itemRegularPriceValue">210</span><span
                                        className="good__itemRegularPriceCur">грн</span>
                    </span>
                                                        </div>
                                                </div>

                                                <div className="good__itemFooter">
                                                    <a href="checkout/?add-to-cart=98" data-quantity="1"
                                                       className="good__item__add__to__cart button product_type_simple add_to_cart_button ajax_add_to_cart"
                                                       data-product_id="98" data-product_sku="" rel="nofollow">В
                                                        корзину</a>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <nav className="woocommerce-pagination">
                                        <ul className="page-numbers">
                                            <li><span aria-current="page" className="page-numbers current">1</span></li>
                                            <li><a className="page-numbers" href="/shop/page/2/">2</a>
                                            </li>
                                            <li><a className="next page-numbers"  href="/shop/page/2/">→</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopPage;