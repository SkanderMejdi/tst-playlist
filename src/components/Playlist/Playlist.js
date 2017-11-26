import React, { Component } from 'react';
import Track from './Track';
import './Playlist.css';

class Playlist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playlist: [
        {
          "id": 1,
          "name": "Beast Of Burden",
          "duration": 211,
          "priority": false,
          "artist": "The Rolling Stones",
          "adder": { "id": 1, "name": "kant", "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd" },
          "pictureUrl": "https://i.scdn.co/image/adcf79a6adae4e1a44d0e34860cc103e28ee4372",
          "votes": { "count": 0, "userVoted": false }
        },
        {
          "id": 2,
          "name": "Purple Haze",
          "duration": 229,
          "priority": false,
          "artist": "Jimi Hendrix",
          "adder": { "id": 1, "name": "kant", "pictureUrl": "https://res.cloudinary.com/jukeo-net/image/upload/ano-b2_eezggd" },
          "pictureUrl": "https://i.scdn.co/image/1d55f445789ed89a1b8fab09c3dad117afb5fe80",
          "votes": { "count": 0, "userVoted": false }
        },
      ]
    };
  }

  componentDidMount() {
    this.order();
  }

  like(id) {
    for (var i = 0; i < this.state.playlist.length; i++) {
      if (this.state.playlist[i].id === id
        && this.state.playlist[i].votes.count < 99
        && !this.state.playlist[i].votes.userVoted) {
        this.state.playlist[i].votes.count++;
        this.state.playlist[i].votes.userVoted = true;
        break;
      } else if (this.state.playlist[i].id === id
        && this.state.playlist[i].votes.userVoted) {
          this.state.playlist[i].votes.count--;
          this.state.playlist[i].votes.userVoted = false;
          break;
        }
    }
    this.order();
  }

  priority(id) {
    for (var i = 0; i < this.state.playlist.length; i++) {
      if (this.state.playlist[i].id === id) {
        this.state.playlist[i].priority = this.state.playlist[i].priority ? false : true;
        this.order();
        break;
      }
    }
  }

  order() {
    function compare(a,b) {
      if (a.priority && !b.priority)
        return -1;
      if (!a.priority && b.priority)
        return 1;
      if (a.votes.count === b.votes.count)
        return a.id > b.id;
      return a.votes.count < b.votes.count;
    }

    this.setState({
      playlist: this.state.playlist.sort(compare)
    })
  }

  render() {

    const like = this.like.bind(this);
    const priority = this.priority.bind(this);

    return (
      <div>
        {this.state.playlist.map(function(track, i) {
          return <Track key={i} track={track} like={like} priority={priority} />
        })}
      </div>
    );

  }
}

export default Playlist;
