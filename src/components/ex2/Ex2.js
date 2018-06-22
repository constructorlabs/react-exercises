import React from 'react';

class Ex2 extends React.Component {
  constructor(){
    super();

    this.state = {
      artist: 'Jimi Hendrix',
      album: 'Electric Ladyland',
      cover: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Jimi_Hendrix_-_Electric_Ladyland.jpg'
    }
  }
  render(){
    return (
      <div>
        <h2>Pass props</h2>
        <div>
          <p>In this exercise the artist, album and cover are provided in the state of Ex2 component. Create a component which will receive the artist, album and cover as props and display them.</p>
        </div>
      </div>
    );
  }
}

export default Ex2;
