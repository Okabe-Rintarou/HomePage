//News powered by NewsAPI https://newsapi.org/

import React from 'react'


//Função que mostra as horas
export class RealTime extends React.Component 
{
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}
	componentDidMount(){
		this.timeID = setInterval(
				() => this.updateTime(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	updateTime() {
		this.setState({
			date: new Date()
		});
	}

	fixTime(x)
	{
		if(x < 10)
		{
			return "0" + x;
		}
		else
		{
			return x;
		}

	}

	createString()
	{
		return "" + this.state.date.getDate() + "/" + this.state.date.getMonth() + "/" + this.state.date.getFullYear() + " " + this.fixTime(this.state.date.getHours()) + ":" + this.fixTime(this.state.date.getMinutes()) + ":" + this.fixTime(this.state.date.getSeconds());
	}


	render() {
		return (
				<div>
				<h1>{this.createString()}</h1>
				</div>
			   );
	}
}

export class ToDoList extends React.Component{


	constructor(props)
	{
		super (props);
		this.state = 
		{
			number: 0,
			list: []
		}



		var url = 'https://newsapi.org/v2/top-headlines?' +
			'country=us&' +
			'apiKey=d159c65d36314e5bb79a8a7f28e3c1d6';
		var req = new Request(url);
		fetch(req)
			.then(function(response) {
				console.log("OI!!");
				console.log(response.json());

			})





	}

	addToList() {

		let x = document.getElementById("itemList").value;
		let v = this.state.list;
		let n = this.state.number;
		v.push(x);
		n++;
		this.setState({
			number: n,
			list: v
		});

	}
	deleteList()
	{
		this.setState({
			number: 0,
			list: []
		})

	}

	createList()
	{
		var i = 0;
		return this.state.list.map((valor) =>  <li key={i++}> {valor} </li>)
	}

	render(){
		return(
				<div>
				<ul>
				{this.createList()}
				</ul>
				<input className="ListButtons" type="text" id="itemList"></input>
				<button className="ListButtons" onClick={() => this.addToList()}>Adicionar na lista</button>
				<button className="ListButtons" onClick={ () => this.deleteList()}>Deletar lista</button>
				</div>
			  );
	}
}

