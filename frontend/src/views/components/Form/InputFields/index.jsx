import { TextField } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const {form,name,disabled,label,value}=props
    const [val,setVal]=useState(value)
    const handleInput=(e)=>{
        console.log('val: ',e.target.value)
        setVal(e.target.value)
        return e.target.value
    }
   
    return (
        <Controller
            control={form.control}
            name={name}
            disabled={disabled}
            render={({field, fieldState: {error}}) => (
                <TextField
                {...field}
                label={label}
                error={!!error}
                value={val}
                onInput={(e)=>setVal(handleInput(e))}
                fullWidth
                variant={'outlined'}
                margin={'normal'}
                helperText={error?error.message:''}
                />
            )}
        
        />
    );
}

export default InputField;