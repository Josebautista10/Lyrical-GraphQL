import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'
import { Link } from 'react-router'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

class SongDetail extends Component {
  render() {
    const { song } = this.props.data
    console.log(song)
    if (!song) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to='/'>Back</Link>
        <h3>{song.title}</h3>
        <LyricList lyrics={song.lyrics}/>
        <LyricCreate songId={song.id}></LyricCreate>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.params.id } }
  }
})(SongDetail)
