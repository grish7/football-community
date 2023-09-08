import React from 'react';
import {Input as StyledInput, InputLabel} from './index.styles.js';


export const Input = ({label, ...props}) => {
    return (
        <label {...props}>
            {label && <InputLabel>{label}</InputLabel>}
            <StyledInput {...props} />
        </label>
    );
};