const strongSearchedText = (text, textSearched) => { 
    if (textSearched === '') {
        return text;
    }
    const pattern = new RegExp(textSearched, 'i');
    const textStrongged = `<b>${textSearched}</b>`;
    return text.replace(pattern, textStrongged);
};
/* 
const strongSearchedText = (contact, searchedText) => {
    const strongContact = contact;
      
    strongContact.name = strongText(strongContact.name, searchedText);
    strongContact.country = strongText(strongContact.country, searchedText);
    strongContact.company = strongText(strongContact.company, searchedText);
    strongContact.department = strongText(strongContact.department, searchedText);
    strongContact.phone = strongText(strongContact.phone, searchedText);
    strongContact.admissionDate = strongText(strongContact.admissionDate, searchedText);

    console.log(strongContact);
    
    return strongContact;
}
 */
export default strongSearchedText;
