import React from "react";

import './form-input.styles.css'




const FormInput = ({handleChange, labelStyle, labelText, error, ...otherProps}) => {
    const {name} = {...otherProps}
    return (
    <div className={`group ${labelStyle === 'shrinkable' ? 'shrink' : ''}`}>
        {
            labelStyle === 'shrinkable'
            ? (error
                ? <span className="err-msg">{error}</span>
                : null)
            : (
                labelText ? 
                (<div className={`${
                            otherProps.value.length && labelStyle === 'shrinkable' ? 'shrink2' : ''
                        } form-input-label`}>
                    <label forhtml={name}>{labelText}</label>
                </div>)
                : null)
        }
        <span className="input">
            {
            labelStyle === 'shrinkable'
            ? (labelText ? 
                <div className={`${
                            otherProps.value.length && labelStyle === 'shrinkable' ? 'shrink2' : ''
                        } form-input-label`}>
                    <label forhtml={name}>{labelText}</label>
                </div>
                : null)
            : (error
                ? <span className="err-msg">{error}</span>
                : null)
            }
            <input className="form-input" onChange={handleChange} {...otherProps} />
        </span>
    </div>
)}

export default FormInput;








