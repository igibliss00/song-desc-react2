import React from 'react';
import SongList from './SongList';
import SongDetails from './SongDetails';

const divStyle = {position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}

class App extends React.Component {
    render() {
        return (
            <div className="ui container grid" style={divStyle}>
                <div className="ui row">
                    <div className="column eight wide">
                        <SongList />    
                    </div>
                    <div className="column eight wide">
                        <SongDetails />    
                    </div>
                </div>
               
            </div>
        )
    }
};

export default App;