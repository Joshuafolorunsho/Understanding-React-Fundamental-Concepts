import React, {useState} from 'react';
import Person from './Components/Person/Person.jsx'

const App = () => { 
  const [person, setPerson] = useState(
    {
      personStatus: false  
    }
  );

  const [people, setPeople] = useState({
    people: [
      {id:0, name: 'Joshua Folorunsho', age: 29},
      {id:1, name: 'James Quick', age: 30},
      {id:2, name: 'Joshua Folorunsho', age: 20}
    ]
  })


  const handleTogglePerson = (event) => {
    setPerson({
      personStatus: !person.personStatus
    });
  }

  const handlePeopleHandler = ({target, target:{ name, value}}, index) => {
   const copiedStatePeople = [...people.people];
   const personIndex = copiedStatePeople.findIndex(person => {
     return person.id === index;
   });

   (name === "name") 
     ? copiedStatePeople[personIndex].name = value 
     : copiedStatePeople[personIndex].age = value;
   

    setPeople({
      people: copiedStatePeople
    });
  
  }

  const deletePersonHandler = (personIndex) => {
    // const filteredArray = people.people.filter((person, index) => index !== personIndex);
    const filteredArray = people.people.filter((person) => person.id !== personIndex);
    setPeople({
      people: filteredArray
    });
  
  }
  
  let personResult = null;

  if (person.personStatus) {
    personResult = <div>
        {people.people.map((person, index) => <Person key={person.id} change={(event) => {handlePeopleHandler(event, index)}} name={person.name} click={() => deletePersonHandler(person.id)} age={person.age} />)} 
      </div>;
  }

  return(

      <div style={{padding: '30px', maxWidth: '500px', margin: '20px auto'}}>
        <button onClick={handleTogglePerson}>Toggle Person</button>
         {
          personResult
         }
      </div>
    );
}


export default App;
