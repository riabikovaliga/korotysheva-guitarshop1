import PropTypes from 'prop-types';
import React from 'react';

const NamesButton = {
    PLUS: 'PLUS',
    MINUS: 'MINUS',
};

const ButtonsWithNumber = ({className, onChange, value = 1}) => {

    const onValueChange = (target) => {
        switch (target) {
            case NamesButton.MINUS:
                return onChange(Number(value) - 1);
            case NamesButton.PLUS:
                return onChange(Number(value) + 1);
            default:
                return onChange(Number.parseFloat(target) > 0 ? Number.parseFloat(target) : value);
        }
    };

    return (
        <div className={`buttons-with-number ${className}`}>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="buttons-with-number__button buttons-with-number__button--minus" name={NamesButton.MINUS}>−</button>
            <input value={value}
                   onChange={(evt) => onValueChange(evt.target.value)}
                   className="buttons-with-number__value"/>
            <button onClick={(evt) => onValueChange(evt.target.name)} className="buttons-with-number__button buttons-with-number__button--plus" name={NamesButton.PLUS}>+</button>
        </div>
    );
};

ButtonsWithNumber.propTypes = {
    className: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export {ButtonsWithNumber};
