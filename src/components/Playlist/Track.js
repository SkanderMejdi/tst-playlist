import React, { Component } from 'react';
import './Playlist.css';

class Track extends Component {
  render() {

    const track = this.props.track

    return (
      <div className="track">
        <div className="user">
          <img src={track.adder.pictureUrl} className="user-picture" alt='user' />
        </div>
        <div className="infos">
          <div className="infos-block">
            <img src={track.pictureUrl} className="track-picture" alt='album' />
            <div className="infos-text">
              <h1>{track.name}</h1>
              <h2>{track.artist}</h2>
            </div>
          </div>
          <span className="adder">ajouté par {track.adder.name}</span>
        </div>
        <div className="action">
          <div className="action-elems">
            <div
              className={"action-button list " + (track.priority ? 'active' : '')}
              onClick={() => this.props.priority(track.id)}>
              <img src={'/pictures/list.png'} className="action-icon" alt='list' />
            </div>
            <div
              className={"action-button heart " + (track.votes.userVoted ? 'active' : '')}
              onClick={() => this.props.like(track.id)}>
              <div className="like">
                {track.votes.count}
              </div>
              <img src={'/pictures/heart.png'} className="action-icon" alt='heart' />
            </div>
          </div>
          <div className="time">
            dans {Math.round(track.duration / 60)} min
          </div>
        </div>
        <div
          className={track.priority ? 'priority-border' : 'priority-hide'}
          >
          <div className="priority-arrow">
            <img src={'/pictures/arrow.png'} className="priority-icon" alt='arrow' />
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
