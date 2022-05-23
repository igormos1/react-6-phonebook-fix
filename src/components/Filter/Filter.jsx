import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-action';
import PropTypes from 'prop-types';
import s from './Filter.module.css';



const Filter = () => {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch()

    const onChange = (e) => dispatch(contactsAction.changeFilter(e.target.value))

    return (
        <div className={s.box}>
            <label className={s.name}>
                Find contacts by name
                <input
                    className={s.nameContact}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    )
}

export default Filter

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};