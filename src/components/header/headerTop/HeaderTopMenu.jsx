import React, { Component } from 'react';

class HeaderTopMenu extends Component {
    render(){
        return (
            <div className="headerTop__menu">
                <ul className="headerTop__menuList">
                    <li className="headerTop__menuItem">
                        <a href="https://algaph.com/shipping/"
                           className="headerTop__menuItemLink" id="">
                            Доставка и оплата </a>
                    </li>
                    <li className="headerTop__menuItem">
                        <a href="https://algaph.com/terms-cooperation/"
                           className="headerTop__menuItemLink" id="">
                            Условия сотрудничества </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default HeaderTopMenu;