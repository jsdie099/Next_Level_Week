import React, {useState} from 'react';

interface HeaderProps {
    title:string;
};


const Header: React.FC<HeaderProps> = (props)=>//fc=function component
{
    const [counter, setCounter] = useState(0);
    return (
        <header>
            <h1>{props.title}</h1>
            <h1>{counter}</h1>
            <button onClick={(e)=>setCounter(counter+1)}>Incrementar</button>
        </header>
    );
}
export default Header;