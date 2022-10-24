import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

MultiField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function MultiField(props) {
    const {form,name,disabled,label,value}=props
    const [val,setVal]=useState(value)
    return (
        <Controller
            control={form.control}
            name={name}
            render={({field, fieldState: {error}}) => (
                <TextField  
                id={'outlined-multiline-static'}
                multiline
                rows={4}
                {...field}
                label={label}
                error={!!error}
                value={val}
                onInput={(e)=>setVal(e.target.value)}
                fullWidth
                variant={'outlined'}
                margin={'normal'}
                helperText={error?error.message:''}
                />
            )}
        
        />
    );
}

export default MultiField;