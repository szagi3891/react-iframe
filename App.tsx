import * as React from 'react';
import styled from '@emotion/styled';
import { Iframe } from './Iframe';

const iframeSrc = 'http://pbojinov.github.io/iframe-communication/iframe.html';

const CustomIframe = styled(Iframe)`
    width: 400px;
    height: 400px;
    border: 1px solid black;
`;

export class App extends React.Component {
    onMess1 = (data: string) => {
        console.info('mess1', data);
    }

    onMess2 = (data: string) => {
        console.info('mess2', data);
    }

    onMess3 = (data: string) => {
        console.info('mess3', data);
    }

    onMess4 = (data: string) => {
        console.info('mess4', data);
    }

    render() {
        return (
            <>
                <h1>Hello, world</h1>
                <CustomIframe src={iframeSrc} onMessage={this.onMess1 }/>
                <CustomIframe src={iframeSrc} onMessage={this.onMess2 }/>
                <CustomIframe src={iframeSrc} onMessage={this.onMess3 }/>
                <CustomIframe src="http://pbojinov.github.io/iframe-communication/" onMessage={this.onMess4 }/>
                
            </>
        );
    }
}

