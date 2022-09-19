import React from 'react';
import PropTypes from 'prop-types';
import { InputOnChange } from '../common/types';

type InputProps = {
    required?: boolean;
    placeholder?: string;
    name: string;
    value: string;
    onChange: InputOnChange;
    id?: string;
    className?: string;
};

export const Input = (props: InputProps) => {
    return <input type='text' pattern='[0-9]+([,][0-9]{0,2})?' {...props} />;
};

Input.propTypes = {
    required: PropTypes.bool,
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
};
