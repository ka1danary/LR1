import React from 'react';
import modulePlaceholder from './MyPlaceholder.module.sass'

const MyPlaceholder = ({ data = [], ...props }) => {
    return (
        <div {...props} className={modulePlaceholder.placeholderBox}>
            <div className={modulePlaceholder.element}>
                {data.map((el) => 
                    <>
                        {el} &nbsp; &nbsp;
                    </>
                )}
            </div>
        </div>
    );
};

export default MyPlaceholder;