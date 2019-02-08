import React, { Component } from 'react';

class FooterCategoryMenuItem extends Component {
    render(){

        const { title, link } = this.props;

        return (
            <li className="footer__categoryItem">
                <a href={ link } className="footer__categoryItemLink">{ title }</a>
            </li>
        );
    }
}

export default FooterCategoryMenuItem;