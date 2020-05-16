import React from 'react';
import './OrderButton.css';

class OrderButton extends React.Component {


    // Função para tratar do evento onClick do campo de ordenação
	// Retorna o nome do botão clicado para o coomponente de filtros
	handleClickedButton = async (event) => {
		event.preventDefault();
		const returnClickedButton = this.props.onclick;
		returnClickedButton(this.props.name);
	}


    render = () => {

        const name = this.props.name;
        const description = this.props.description;
        const selected = this.props.selected || false;

        // Define o conjunto de classes CSS bo botão de ordenação de acordo com a ordenação definido
        let classesButton = "filters__item";
        if ( selected ) {
            classesButton += " is-selected";
        }


        return (
            <button 
            key={name}
            className={classesButton}
            onClick={this.handleClickedButton}>
                {description} <i className="fas fa-sort-down" />
            </button>            
        );
    }

}

export default OrderButton;
