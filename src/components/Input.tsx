import React from 'react';

export const Input = (props) => {
    return <input type='text' pattern='[0-9]+([,][0-9]{0,2})?' {...props} />;
};
