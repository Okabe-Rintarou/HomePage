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
	}

	addToList()
	{
		let x = document.getElementById("itemList");
		let v = this.state.list;
		let n = this.state.number;
		v.push(x);
		n++;
		this.setState({
			number: n,
			list: v
		});
		console.log("Uia");
	}
	deleteList()
	{
		this.setState({
			number: 0,
			list: []
		})
		console.log("Eita");
	}
	createList()
	{
		let i;
		let ret = "";
		for(i = 0; i < this.state.number; i++)
		{
			console.log("Yay");
			ret = ret + "<li>" + this.state.list[i] + "</li>";
		}
		return ret;
	}

	render(){
		return(
				<div>
					<ul>
						{this.createList()}	
					</ul>
					<button onClick={this.deleteList()}>Deletar lista</button>
					<input type="text" id="itemList"></input>
					<button onClick={this.addToList()}>Adicionar na lista</button>
					</div>
	  );
	}
}

