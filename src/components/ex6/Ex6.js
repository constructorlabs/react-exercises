import React from 'react';

class Ex6 extends React.Component {
  render(){
    return (
      <div>
        <h2>Lists and lifting state</h2>
        <p>Create 4 components:</p>
        <ol>
          <li>Wrapper - which will contain EntryForm and Albums</li>
          <li>EntryForm -  which has 2 inputs: artist and album</li>
          <li>Albums - which will display multiple Album components</li>
          <li>Album - info will display an artist name and title.</li>
        </ol>
        <ul>
          <li>
            In EntryForm add change event listeners on each input and on change set each of the values in state.
          </li>
          <li>
            Add a property called 'albums' to initial state of Wrapper and set its value to be an empty array.
          </li>
          <li>
            Add a submit event listener to EntryForm. Make sure you set it on a 'form' element. Inside the submit event handler create an object which will have an 'id' (which should be incremented on each insert), 'artist' and 'album' property taken from state which was set in part one.
          </li>
          <li>
            Create a receiver method in Wrapper and pass it to EntryForm as props. Inside the submit handler of EntryForm, call the receiver function prop and pass in the album object created in previous step.
          </li>
          <li>
            Add functionality to receiver method in Wrapper to add the album object passed in to the albums array in state.
          </li>
          <li>
            Inside Albums component map over the album props and for each album in the array create a new Album component to be displayed inside Albums. Be sure to pass the id of each album as a key to each Album component. For each album object, pass it as props to the Album component.
          </li>
          <li>
            Inside each Album component take the artist and album properties from the album props and display them.
          </li>
        </ul>
      </div>
    );
  }
}

export default Ex6;
