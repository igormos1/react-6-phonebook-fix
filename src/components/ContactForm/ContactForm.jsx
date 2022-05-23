import { useState} from "react";
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import contactsAction from '../../redux/contacts/contacts-action';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(state => state.contacts.items);
    const dispatch = useDispatch()
    
    const onHandleChange = (event) => {
      
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const onHandleSubmit = event => {
          if (contacts.find(contact => contact.name === name)) {
        alert(`${name} is already in contacts`);
        return
        }
        event.preventDefault();
        dispatch(contactsAction.addContact(name, number))
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={s.form}
            onSubmit={onHandleSubmit}
        >
            <label className={s.name}> 
                Name
                <input
                    className={s.nameContact}
                    onChange={onHandleChange}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={s.name}>
                Number
                <input
                    className={s.nameContact}
                    onChange={onHandleChange}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={s.button} type="submit">Add contact</button>
        </form>
    )
};

export default ContactForm;

ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    contacts: PropTypes.array
};


