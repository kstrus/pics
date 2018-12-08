import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = (term) => {
        unsplash.get('/search/photos', {
            params: { query: term }
        }).then((response) => {
            let images = response.data.results;

            this.setState({ images: images })
        }).catch((error) => {
            console.log(error);
        })
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
