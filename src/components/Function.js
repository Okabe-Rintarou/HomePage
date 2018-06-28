//News powered by NewsAPI https://newsapi.org/
//Weather powered by OpenWeatherMap https://openweathermap.org/

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
				<h3>{this.createString()}</h3>
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

	}

	getNews()
	{
		let i = 0;
		return this.state.news.map((valor) =>  <li text-align="left" float="left" key={i++}> {valor} </li>)
	}


	render(){
		return(
				<div text-align="left">
				<h1 text-align="center">Notícias</h1>
				{this.getNews()}
				</div>
			  );
	}
}



//Utiliza uma API para pegar o clima e mostrar na parte de cima
export class Weather extends React.Component {
	constructor(props)
	{
		super(props);
		this.state={
			name: "",
			temp: 0,
			weather: ""
		}
	}
	componentDidMount(){
		let url =  'http://api.openweathermap.org/data/2.5/weather?id=3448433&lang=pt&APPID=f84480eeaf54d5e48cd7944efd28add2';
		let req = new Request(url);
		fetch(req).then(response => response.json())
			.then((response) => {
				console.log(response);
				console.log(response["main"]["temp"]);
				console.log(response["main"]["temp_max"]);
				console.log(response["main"]["temp_min"]);
				console.log(response["name"]);
				console.log(response["weather"][0]["description"]);
				this.setState({
					name: response["name"],
					temp: response["main"]["temp"],
					weather: response["weather"][0]["description"]
				})
			});
	}

	getTemp()
	{
		if(this.state.temp === 0)
		{
			return "Carregando clima, agurde...";
		}
		else
		{
			let temp = this.state.temp - 273.15 + " ºC"
			return this.getName() + " | " + this.getWeather() + " " + temp;
		}
	}

	getWeather()
	{
		return this.state.weather.charAt(0).toUpperCase() + this.state.weather.slice(1);
	}

	getName()
	{
		return this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1);
	}

	render(){
		return(
				<div>
				<h3>{this.getTemp()}</h3>
				</div>
		);
	}
}


export class Stocks extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			Money1: [],
			Money2: [],
			Rate: []
		}
	}


}


