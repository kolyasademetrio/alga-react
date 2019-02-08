import React, {Component} from 'react';
import ModalSearch from '../../modals/modal-search/ModalSearch';

class HeaderTopSearch extends Component {

    state = {
        showModal: false,
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        });

        document.documentElement.classList.toggle('overflow-hidden');
    }

    render() {
        return (
            <div className="headerTop__search">
                <a href="#"
                   className="headerTop__searchLink"
                   onClick={this.showModal}
                ></a>
                <ModalSearch showModal={this.state.showModal}
                             onClose={this.showModal}/>
            </div>
        );
    }
}

export default HeaderTopSearch;