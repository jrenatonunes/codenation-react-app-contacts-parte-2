import React from 'react';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import filterContacts from './utils/filterContacts';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      orderBy: 'name',
      contacts: [],
      contactsFiltered : []
    }
  }


  // Obtem os contatos da API
  componentDidMount = async () => {
    const urlApi = 'https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts';
    await fetch(urlApi)
    .then((response) => response.json())
    .then((response) => this.setState( { contacts:  response, contactsFiltered: response } ));
  }

  // Função responsável por filtrar os contatos com base no texto digitado no campo 
  // existente no componente de filtros
  onSearch = async (textToFilter)  => this.setState(
      {contactsFiltered: filterContacts(this.state.contacts, textToFilter) }
    );


  // Função responsável por ordenar os contatos com base no botão de ordenação clicado 
  // no componente de filtros
  onOrderBy = async (orderButtonClicked)  => this.setState( { orderBy : orderButtonClicked });


  render = () => {

    return (
      <div className="app" data-testid="app">

        <Topbar/>

        <Filters 
        orderby={this.state.orderBy} 
        returnSearchText={this.onSearch} 
        returnOrderBy={this.onOrderBy} />

        <Contacts 
        contacts={this.state.contactsFiltered} 
        orderBy={this.state.orderBy} />

      </div>
    )
  }
}

export default App;
