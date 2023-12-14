import React from 'react';
import moduleButton from './MyButton.module.sass'

const MyButton = ({ title, ...props }) => {
    return (
        <div className={moduleButton.buttonContainer}>
            <button {...props} className={moduleButton.buttonBox}>
                {title}
            </button>
        </div>
    );
};

export default MyButton;