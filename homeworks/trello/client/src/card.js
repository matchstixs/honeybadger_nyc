import React from 'react';

const Card = ({task, is_completed, handleCardDelete, handleCardFinish }) => {
    const cardClass = is_completed ? 'done' : 'todo';

    return (
        <li className={`card ${is_completed}`} data-id>
        {task}
            <span className='delete' onClick={handleCardDelete}>X</span>
            {is_completed} ?  <span className='finish'>Delete</span> 

        </li>
    )
}


export default Card;