import React from 'react';
import {Input} from "reactstrap"

const InputComponent = ({ onSearch }) => {
    return <Input type="text"
    placeholder="Please enter username"
    onChange={({ target: { value }}) => onSearch(value)} />
}

export default InputComponent;