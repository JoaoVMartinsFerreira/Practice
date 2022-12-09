import React from 'react';



export default({ onclick, name, className }) =>
<button className={className} onClick={onclick}>{name}</button>
