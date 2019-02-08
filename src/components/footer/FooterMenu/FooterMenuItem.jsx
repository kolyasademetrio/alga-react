import React, { Component } from 'react';

class FooterMenuItem extends Component {
    render(){
        const {title, link} = this.props;

        return (
            <li className="footer__menuItem">
                <a href={ link } className="footer__menuItemLink">{ title }</a>
            </li>
        );
    }
}

export default FooterMenuItem;