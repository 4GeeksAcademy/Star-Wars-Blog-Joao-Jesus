import React from 'react';
import { Link } from 'react-router-dom';


 export default mainCard = (props) =>  
 <div className="card" key={props.id}>
                       
 <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} alt={props.name} />
  <h2>{props.name}</h2>
  <Link className="btn btn-primary" to={`/single/${props.id}`}>View Details</Link>
</div>
