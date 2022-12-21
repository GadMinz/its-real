import React from 'react';
import s from './Element.module.scss'
interface ElementProps {

}


const Element: React.FC<ElementProps> = () => {
    return (
        <li className={s.element}>
            Исчезнет через N секунд
        </li>
    );
};

export default Element;
