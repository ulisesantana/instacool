import React, {Component, CSSProperties} from 'react'
import { IntlProvider } from 'react-intl'
export default class Wrapper extends Component {
    style: CSSProperties = {
        backgroundImage: 'linear-gradient(to bottom, orange, coral, MediumVioletRed)',
        padding: '20px',
        display: 'flex',
        justifyContent: 'space-around'
    };

    render() {
        return (
            <div style={this.style}>
                <IntlProvider locale="en">{this.props.children}</IntlProvider>
            </div>
        );
    }
}