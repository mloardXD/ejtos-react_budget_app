
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChange = () => {
    const { dispatch } = useContext(AppContext);
    
    const handleSubmit = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
    }
    return (
<div className='alert alert-secondary'>
<select className="custom-select" id="currencyDropdown" onChange={(event) => handleSubmit(event.target.value)}>
    <option hidden defaultValue>Currency (£ Pound)</option>
    <option value="$" name="$ Dollar">$ Dollar</option>
    <option value="£" name="£ Pound">£ Pound</option>
    <option value="€" name="€ Euro">€ Euro</option>
    <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
</select>
</div>
    );
};
export default CurrencyChange;