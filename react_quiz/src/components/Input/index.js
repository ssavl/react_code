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
        size = 'm',
        type = 'text',
        value,
        onBlur = _ => _,
        onChange,
    } = props;

    const handleBlur = e => {
        e.preventDefault();
        if (!disabled) {
            onBlur(value, props);
        }
    };

    const handleChange = e => {
        e.preventDefault();
        if (!disabled) {
            onChange(e.target.value, props);
        }
    };

    const inputProps = {
        field,
        onBlur: handleBlur,
        onChange: handleChange,
        disabled,
        placeholder,
        type,
        value,
    };

    const classInput = ['Input__input'];
    if (error) classInput.push(`Input__error`);
    if (size) classInput.push(`Input__${size}`)

    return (
        <div className='Input'>
            {mask ? (
                <InputMask {...inputProps} className={classInput.join(' ')} mask={mask} />
            ) : (
                <input className={classInput.join(' ')} {...inputProps} />
            )}
            {error && <div className='Input__error-detail'>{error}</div>}
        </div>
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