import React from 'react';
import OrderButton from './OrderButton';
import SearchButton from './SearchButton';

import './Filters.css';


class Filters extends React.Component {


	// Função para tratar do evento onClick do campo de pesquisa
	// Retorna o texto digitado para que os contatos possam ser filtrados
	handleChangedSearchText = async (event) => {
		event.preventDefault();
		const returnSearchText = this.props.returnSearchText;
		const textTyped = event.target.value;
		returnSearchText(textTyped);
	}

	// Função para tratar do evento onClick dos botões de ordenação
	// Retorna o nome do botão clicado para que possa ser realizada a ordenação
	// dos contatos de acordo com o botão clicado
	handleClickedOrderButton = async (buttonClicked) => {
		const returnOrderByButton = this.props.returnOrderBy;
		returnOrderByButton(buttonClicked);
	}


	render = () => {

		// Definir qual botão de ordenação será apresentado como ativo
		const orderBy = this.props.orderby;
		const ordeByStatus = {
			'name': false,
			'country': false,
			'company': false,
			'department': false,
			'admissionDate': false
		}
		ordeByStatus[orderBy] = true;
		

		return (

			<div className="container" data-testid="filters">
			<section className="filters">

			  <div className="filters__search">

				<input type="text" 
				className="filters__search__input" 
				placeholder="Pesquisar" 
				onChange={this.handleChangedSearchText}/>

				<SearchButton />

			  </div>

			  <OrderButton 
			  name="name" 
			  description="Nome" 
			  selected={ordeByStatus['name']} 
			  onclick={this.handleClickedOrderButton}/>

			  <OrderButton 
			  name="country" 
			  description="País" 
			  selected={ordeByStatus['country']} 
			  onclick={this.handleClickedOrderButton}/>

			  <OrderButton 
			  name="company" 
			  description="Empresa" 
			  selected={ordeByStatus['company']} 
			  onclick={this.handleClickedOrderButton}/>

			  <OrderButton 
			  name="department" 
			  description="Departamento" 
			  selected={ordeByStatus['department']} 
			  onclick={this.handleClickedOrderButton}/>
			  
			  <OrderButton 
			  name="admissionDate" 
			  description="Data de adminisssão" 
			  selected={ordeByStatus['admissionDate']} 
			  onclick={this.handleClickedOrderButton}/>
			  
			</section>
		  </div>

		);
	}
}

export default Filters;
