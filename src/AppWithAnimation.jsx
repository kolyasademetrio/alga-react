import React, {Component} from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Ancorup from './components/Ancorup';

import { Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ShopPage from './components/pages/ShopPage';
import VideotipPage from './components/pages/VideotipPage';
import StockPage from './components/pages/StockPage';
import DoyouknowPage from './components/pages/DoyouknowPage';
import ContactsPage from './components/pages/ContactsPage';
import ErrorPage from './components/pages/ErrorPage';
import ShippingPage from './components/pages/ShippingPage';
import TermsCooperationPage from './components/pages/TermsCooperationPage';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class AppWithAnimation extends Component {
    render() {
        return (
            <div>
                <div className="content__main">
                    <Header/>
                    <div id="main" className="site__main">
                        <Route render={({ location }) => (
                            <TransitionGroup className="transition-group-page">
                                <CSSTransition timeout={3000}
                                               classNames="fade"
                                               key={ location.key }
                                >
                                    <Switch location={location}>
                                        <Route exact path="/" component={ HomePage }/>
                                        <Route exact path="/about-cosmetics" component={ AboutPage }/>
                                        <Route exact path="/shop" component={ ShopPage }/>
                                        <Route exact path="/videotip" component={ VideotipPage }/>
                                        <Route exact path="/stock" component={ StockPage }/>
                                        <Route exact path="/doyouknow" component={ DoyouknowPage }/>
                                        <Route exact path="/contacts" component={ ContactsPage }/>
                                        <Route exact path="/shipping" component={ ShippingPage }/>
                                        <Route exact path="/terms-cooperation" component={ TermsCooperationPage }/>
                                        <Route component={ ErrorPage } />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}/>


                    </div>
                </div>
                <Footer/>
                <Ancorup/>
            </div>
        );
    }
}

export default AppWithAnimation;