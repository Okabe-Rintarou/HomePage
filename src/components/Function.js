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

//Faz um sistema simples de tarefas para fazer
export class ToDoList extends React.Component{
	constructor(props)
	{
		super (props);
		this.state = 
		{
			number: 0,
			list: []
		}

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
				<h1 text-align="center" float="center">Tarefas</h1>
				<ul id="list">
				{this.createList()}
				</ul>
				<input className="ListButtons" type="text" id="itemList"></input>
				<button className="ListButtons" onClick={() => this.addToList()}>Adicionar na lista</button>
				<button className="ListButtons" onClick={ () => this.deleteList()}>Deletar lista</button>
				</div>
			  );
	}
}


//Utiliza uma API para pegar notícias
export class News extends React.Component{
	constructor(props)
	{
		super(props);
		this.state = {
			image: [],
			news: []
		}

	}

	componentDidMount(){
		var images = [];
		var newss = [];

		var url = 'https://newsapi.org/v2/top-headlines?' +
			'country=us&' +
			'apiKey=d159c65d36314e5bb79a8a7f28e3c1d6';
		var req = new Request(url);
		fetch(req).then(response => response.json())
			.then((response) => {
				for(let i = 0; i < 20; ++i)
				{
					images.push(response["articles"][i]["urlToImage"]);
					newss.push(response["articles"][i]["title"]);
				}
				this.setState({
					images: images,
					news: newss
				});
			})
		url =  'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f84480eeaf54d5e48cd7944efd28add2';
		req = new Request(url);
		fetch(req).then(response => response.json())
			.then((response) => {
					console.log(response);
				});
	}

	componentWillUnmount() {
	}

	getNews()
	{
		let i = 0;
		return this.state.news.map((valor) =>  <li key={i++}> {valor} </li>)
	}


	render(){
		return(
				<div>
				<h1>Notícias</h1>
				{this.getNews()}
				</div>
			  );
	}


}


