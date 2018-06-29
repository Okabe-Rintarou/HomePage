import React from 'react'


class Title extends React.Component {
	render() {
		return (
			<div>
				<Up/>
				<Left/>
				<Right/>
				<Down/>
			</div>
		);
	}
}
class Up extends React.Component {
	render() {
		return (
			<div className="Div">
				<Weather/>
				<Date/>
			</div>
		);
	}
}

class Left extends React.Component {
	render () {
		return (
				<div className="Div">
					<Todo/>
				</div>
				);
	}
}

class Right extends React.Component {
	render () {
		return (
				<div className="Div">
					<News/>
					<Stocks/>
				</div>
				);
	}
}
class Down extends React.Component {
	render () {
		return (
				<div className="Div">
				</div>
				);
	}
}

class Weather extends React.Component {
	render(){
		return (
				<div id="Weather">
				</div>
		);
	}
}

class Date extends React.Component {
	render() {
		return (
			<div id="Date">
			</div>
		);
	}
}
class Todo extends React.Component {
	render() {
		return (
			<div id="Todo">
				<div id="List" className="Content">
				</div>
			</div>

		);
	}
}
class News extends React.Component {
	render() {
		return (
			<div className="RightChild">
				<div id="News" className="Content">
				</div>
			</div>

		);
	}
}
class Stocks extends React.Component {
	render() {
		return (
			<div className="RightChild">
				<div id="Stocks" className="Content">
				</div>
			</div>

		);
	}
}
export default Title;
