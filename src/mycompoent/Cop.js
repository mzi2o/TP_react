import React from 'react';

function Cop() {
    let age = "30";
    const elm = {age} > 10 ? "hi":"have a good week";
    return (
        <div>
            <h1>{elm}</h1>
        </div>
    );
}

export default Cop;