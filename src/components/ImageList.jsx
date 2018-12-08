import React from 'react';

class ImageList extends React.Component {
    render() {
        const images = this.props.images.map(({ id, description, urls }) => {
            return (
                <div className="item" key={id}>
                    <img className="ui small rounded image" alt={description} src={urls.small}/>
                </div>
            );
        });

        return (
            <div className="ui list">
                {images}
            </div>
        );
    }
}

export default ImageList;
