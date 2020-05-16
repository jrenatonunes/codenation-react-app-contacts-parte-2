/* eslint-disable no-unused-vars */
import React from 'react';
import ContactsHeader from './ContactstHeader';
import Contact from './Contact';
import './Contacts.css';

// Importar a função responsável por realizar a ordenação dos contatos
import orderContacts from '../utils/orderContacts';


class Contacts extends React.Component {

	render = () =>  {

		const contacts = this.props.contacts;
		const orderBy = this.props.orderBy || 'name';

		// Realiza a ordenação do vetor de contatos com base na ordenação definida
		const contactsOrdered = contacts && orderContacts(contacts, orderBy);

		return (
			<div className="container" data-testid="contacts">
				<section className="contacts">
					<ContactsHeader />
					{
						contactsOrdered &&
						contactsOrdered.map(contact =>  
							<Contact 
							data={contact} 
							key={contact.id} /> )
					}
				</section>
		  	</div>
		);
	}
}

export default Contacts;
