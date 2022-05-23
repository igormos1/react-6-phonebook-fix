import React from "react";
import { useSelector, useDispatch} from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-action';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const getVisinleContacts = (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return allContacts.filter(({ name }) =>
        name.toLowerCase().includes(normalizedFilter),
    );
};

const ContactList = () => {
    const contacts = useSelector(state => getVisinleContacts(state.contacts.items, state.contacts.filter));
    const dispatch = useDispatch()

    const onDeleteContact = (id) => dispatch(contactsAction.deleteContact(id))

    return (
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (

                <li className={s.item} key={id}>
                    {name}:
                    <span className={s.number}>{number}</span>
                    <button className={s.button} onClick={()=> onDeleteContact(id)}>Delete</button>
                </li>))}
        </ul>

    );
    
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.array,
    onDeleteContact: PropTypes.func,
};