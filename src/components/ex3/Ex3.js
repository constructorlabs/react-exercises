import React from 'react';

class Ex3 extends React.Component {
  render(){
    return (
      <div>
        <h2>Listen for events and setState</h2>
        <p>Create a component which has 3 inputs: artist, album and cover.</p>
        <ul>
          <li>
            Add change event listeners on each input and on change set each of the values in state.
          </li>
          <li>
            Display the artist, album and cover in your component from state.
          </li>
        </ul>
      </div>
    );
  }
}

export default Ex3;
