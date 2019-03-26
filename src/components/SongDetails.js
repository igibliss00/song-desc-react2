import React from 'react';
import { connect } from 'react-redux';

const SongDetails = props => {
    if (!props.selectedSong){
        return (
            <div>Select a song</div>
        )
    }
    return (
        <div>
            <h3>Song Description</h3>
            <p>Song Title: {props.selectedSong.title}</p>
            <p>Song Length: {props.selectedSong.length}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedSong: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetails);