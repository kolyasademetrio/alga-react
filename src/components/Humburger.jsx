import React, { Component } from 'react';
import ModalMenu from '../components/modals/modal-menu/ModalMenu';

class Humburger extends Component {

    state = {
        showModal: false,
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal,
        });

        document.documentElement.classList.toggle('overflow-hidden');
    }

    render(){
        return (
            <React.Fragment>
                <a href="#" className="headerMiddle__humburger" onClick={this.showModal}></a>
                <ModalMenu showModal={this.state.showModal} onClose={this.showModal}/>
            </React.Fragment>
        );
    }
}

export default Humburger;