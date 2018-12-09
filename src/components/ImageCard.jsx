import React from 'react';

class ImageCard extends React.Component {
    ROW_HEIGHT = 10;

    constructor(props) {
        super(props);

        this.state = {
            spans: 0
        };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / this.ROW_HEIGHT);

        this.setState({ spans });
    };

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    alt={description}
                    src={urls.regular}
                    className="image"
                    ref={this.imageRef}
                />
            </div>
        );
    }
}

export default ImageCard;
