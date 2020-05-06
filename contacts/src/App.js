import React, { Component } from "react";


// function App() {
//   const people = [
//     {name : 'Tyler'},
//     {name : 'Karen'},
//     {name : 'Richard'}
//   ]
//   return <ol>
//     {people.map((person) => (
//       <li key = {person.name}>
//         {person.name}
//       </li>
//     ))}
//   </ol>;
// }
class ContactList extends React.Component {
  render() {
    const people = this.props.contacts
    return (
      <ol>
        {people.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={
          [
                {name : 'Tyler'},
                {name : 'Karen'},
                {name : 'Richard'}
              ]
        }/>
<ContactList contacts={
          [
                {name : 'Apama'},
                {name : 'Pouya'},
                {name : 'parsia'}
              ]
        }/>

      </div>
    );
  }
}

export default App;
