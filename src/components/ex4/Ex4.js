import React from 'react';

class Ex4 extends React.Component {
  render(){
    return (
      <div>
        <h2>Listen for events, setState and pass props</h2>
        <p>Create 2 components:</p>
        <ol>
          <li>EntryForm -  which has 2 inputs: artist and album</li>
          <li>Info - info will have a (1) label which what type of information we are displaying artist or album and (2) the contents, either artist name or album name.</li>
        </ol>
        <ul>
          <li>
            Add change event listeners on each input and on change set each of the values in state of EntryForm.
          </li>
          <li>
            Display 2 Info components in EntryForm and pass down as props the label as a string and the contents for each from state of EntryForm.
          </li>
        </ul>
      </div>
    );
  }
}

export default Ex4;
