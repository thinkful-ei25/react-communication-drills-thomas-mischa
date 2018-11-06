import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showButton: true
        };
    }

    handleClick() {
        this.setState ({
            showButton: false
        });
    }

    render() {
        // Show the button to start with
        if (this.state.showButton) {
            return <SurpriseButton onClickTrue={() => this.handleClick()}/>
        } else {
            return <SurpriseImage />
        }
    }
}
