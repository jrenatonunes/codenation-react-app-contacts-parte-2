/* eslint-disable no-unused-vars */
import React from 'react';
import './Contact.css';
import shortLocaleDate from '../utils/formatDate';


class Contact extends React.Component {
  
  render = () => {

    // Recebe um objeto com os dados de um determinado contatos através da propriedade data
    // e renderiza o componente com os dados do contato
    const contact = this.props.data;

    return (
            <article className="contact" data-testid="contact">
              <span className="contact__avatar" data-testid="contact-avatar">
                <img src={contact.avatar} alt={contact.name}/>
              </span>
              <span className="contact__data" data-testid="contact-name">{contact.name}</span>
              <span className="contact__data" data-testid="contact-phone">{contact.phone}</span>
              <span className="contact__data" data-testid="contact-country">{contact.country}</span>
              <span className="contact__data" data-testid="contact-date">{shortLocaleDate(contact.admissionDate)}</span>
              <span className="contact__data" data-testid="contact-company">{contact.company}</span>
              <span className="contact__data" data-testid="contact-department">{contact.department}</span>
            </article>
    );
  }
}

export default Contact;
