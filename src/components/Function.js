//News powered by NewsAPI https://newsapi.org/
//Weather powered by OpenWeatherMap https://openweathermap.org/
//Stocks powered by Alpha Vantage https://www.alphavantage.co/

import React from 'react'


//Função que mostra as horas
export class RealTime extends React.Component 
{
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	//Chama a função updateTime a cada segundo
	componentDidMount(){
		this.timeID = setInterval(
				() => this.updateTime(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	//Atualiza o relógio
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

	//Cria o relógio de uma maneira mais arrumada
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

	//Quando o botão de adicionar é clicado, ele adiciona o texto no campo de entrada na lista
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

	//Delet a lista inteira
	deleteList()
	{
		this.setState({
			number: 0,
			list: []
		})

	}

	//Imprime a lista
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
		//image: Link para as imagens
		//news: Título das notícias
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

	//Imprime as notícias
	getNews()
	{
		let i = 0;
		return this.state.news.map((valor) =>  <p key={i++}> {valor} </p>)
	}


	render(){
		return(
				<div>
					<h1 float="center" text-align="center">Notícias</h1>
					<div text-align="left">
						{this.getNews()}
					</div>
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
				this.setState({
					name: response["name"],
					temp: response["main"]["temp"],
					weather: response["weather"][0]["description"]
				})
			});
	}

	//Imprime os dados da temperatura e tempo
	getTemp()
	{
		if(this.state.temp === 0)
		{
			return "Carregando clima, aguarde...";
		}
		else
		{
			let temp = this.state.temp - 273.15 + " ºC"
			return this.getName() + " | " + this.getWeather() + " " + temp;
		}
	}

	//Adquire o nome do tempo atual
	getWeather()
	{
		return this.state.weather.charAt(0).toUpperCase() + this.state.weather.slice(1);
	}

	//Adquire o nome do local
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


//Classe que mostra taxa de câmbio pela API
export class Stocks extends React.Component
{
	constructor(props)
	{
		super(props);
		//Money1: Sigla da moeda estrangeira
		//Name1: Nome da moeda entrangeira
		//Money2: Sigla da moeda comparada
		//Name2: Nome da moeda comparada
		//Rate: Razão do valor das duas moedas
		this.state={
			Money1: [],
			Name1: [],
			Money2: [],
			Name2: [],
			Rate: []
		}
	}

	componentDidMount(){
		this.getData("USD");
		this.getData("EUR");
		this.getData("JPY");
		this.getData("CNY");
	}

	//Adquire os dados da sigla passada
	getData(x)
	{
		let Dosh1 = this.state.Money1;
		let Name1 = this.state.Name1;
		let Dosh2 = this.state.Money2;
		let Name2 = this.state.Name2;
		let Rate = this.state.Rate;
		let url =  "http://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=" + x + "&to_currency=BRL&apikey=7B49SBU7EGB7KEAU";

		let req = new Request(url);
		fetch(req).then(response => response.json())
			.then((response) => {
				console.log(response);
				Dosh1.push(response["Realtime Currency Exchange Rate"]["1. From_Currency Code"]);
				Name1.push(response["Realtime Currency Exchange Rate"]["2. From_Currency Name"]);
				Dosh2.push(response["Realtime Currency Exchange Rate"]["3. To_Currency Code"]);
				Name2.push(response["Realtime Currency Exchange Rate"]["4. To_Currency Name"]);
				Rate.push(response["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
				this.setState({
					Money1: Dosh1,
					Name1: Name1,
					Money2: Dosh2,
					Name2: Name2,
					Rate: Rate
				})
			});
	}

	//Imprime os valores na interface
	getMoney()
	{
		var i = 0;
		if(this.state.Money1.length > 0)
		{
			return (this.state.Money1.map((valor) => 
						<div key={i}>
							<p>	1 {valor} ({this.state.Name1[i]}) = {this.state.Rate[i]} {this.state.Money2[i]} ({this.state.Name2[i++]})</p>
						</div>
					));
		}
		else
		{
			return <h3>Carregando, por favor aguarde....</h3>
		}
		

	}

	render(){
		return(
				<div>
					<h1>Taxa de Câmbio</h1>
					{this.getMoney()}
				</div>
			  );
	}




}


