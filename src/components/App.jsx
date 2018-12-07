import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = (term) => {
        unsplash.get('/search/photos', {
            params: { query: term }
        }).then((response) => {
            let images = response.data.results.map((res) => res.urls.regular);

            this.setState({ images: images })
        }).catch((error) => {
            console.log(error);
        })
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '30px' }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                Found {this.state.images.length} images.
            </div>
        );
    }
}

export default App;
