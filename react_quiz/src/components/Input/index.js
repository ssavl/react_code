import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import './styles.sass';

const Input = props => {
    const {
        disabled,
        error,
        field,
        mask,
        placeholder,
        type,
        value,
    } = props;

    // const inputProps = {
    //     field,
    //     onBlur: handleBlur,
    //     onChange: handleChange,
    //     disabled,
    //     placeholder,
    //     type,
    //     value,
    // };



    const classInput = ['Input__input']
    if (error) classInput.push(`Input__error`)
    if (disabled) classInput.push(`Input__disabled`)

    return (
        <>
            <div className={'Input__wrapper'}>
                <input
                    field={field}
                    type={type}
                    placeholder={placeholder}
                    className={classInput.join(' ')}
                    disabled={disabled}
                    value={value}
                />
                <div className={'Input__border'}/>
            </div>
        </>
    );
};

Input.propTypes = {
    disabled: PropTypes.bool,
    error: PropTypes.string,
    field: PropTypes.string,
    mask: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default Input;