import React from 'react';
import './Person.css'

const Person = (props) => {
   return (
      <div>
         <p onClick={props.click}>My name is <strong>{props.name}</strong> and I am <strong>{props.age}</strong> year's old</p>
         <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" onChange={props.change} />
            <br/>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" onChange={props.change} />
         </form>
      </div>
   );
}

export default Person;