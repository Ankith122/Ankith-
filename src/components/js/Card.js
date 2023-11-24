import React from 'react';
import '../css/Card.css';
const Card = ({ Skill }) => {
    return (
        <div className="card" key={Skill.id}>
            <img src={Skill.I} alt={Skill.H} />
            <h3>{Skill.H}</h3>
            {/* <p>{Skill.p}</p> */}
        </div>
    );
};

export default Card;
