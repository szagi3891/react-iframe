import * as React from 'react';
//import { ObDump } from './ObDump';

//const dump = new ObDump();

interface PropsType {
    className?: string,
    src: string,
    onMessage: (data: string) => void,
}

export class Iframe extends React.Component<PropsType> {
    ref: HTMLIFrameElement | null = null;

    onMessage = (event: MessageEvent) => {
        //console.info(event);

        //event.source

        if (this.ref) {
            //console.info(`Porównuję ${dump.label(this.ref.contentWindow)} ${dump.label(event.source)}`);

            if (this.ref.contentWindow === event.source) {
                this.props.onMessage(event.data);
            }
        }
    }

    componentDidMount() {
        window.addEventListener('message', this.onMessage);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.onMessage);
    }

    setRef = (ref: HTMLIFrameElement | null) => {
        this.ref = ref;
    }

    render() {
        const { className, src } = this.props;

        return (
            <iframe className={className} src={src} ref={this.setRef} />
        )
    }
}
