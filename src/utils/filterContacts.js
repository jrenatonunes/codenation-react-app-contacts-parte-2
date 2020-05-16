// Função para verificar se um texto existe em algum dos campos
// do objeto contato
const contactContainsText = (contact, text) => {
    return (
      contact.name.toLowerCase().includes(text) || 
      contact.company.toLowerCase().includes(text) || 
      contact.department.toLowerCase().includes(text) ||
      contact.country.toLowerCase().includes(text)  || 
      contact.admissionDate.toLowerCase().includes(text) || 
      contact.phone.toLowerCase().includes(text) 
      );
}


// Função para filtras os contatos com base em um texto
const filterContacts =  (contacts, text) => {
    return contacts.filter(contact => contactContainsText(contact, text.toLowerCase())
    );
}

export default filterContacts;
