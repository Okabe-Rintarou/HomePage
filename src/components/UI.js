import React from 'react'
import {setDate} from './Function';


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
				<Welcome/>
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
					<Window/>
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
class Welcome extends React.Component {
	render() {
		return (
			<div id="Welcome">
				<h1>Bem vindo usuário!</h1>
			</div>
		);
	}
}
class Date extends React.Component {
	render() {
		return (
			<div id="Date">
			<h1>{setDate()}</h1>
			</div>
		);
	}
}
class Todo extends React.Component {
	render() {
		return (
			<div id="Todo">
				<h1>Tarefas</h1>
			</div>

		);
	}
}
class News extends React.Component {
	render() {
		return (
			<div id="News" className="RightChild">
				<h1>Notícias</h1>
			</div>

		);
	}
}
class Window extends React.Component {
	render() {
		return (
			<div id="Window" className="RightChild">
				<h1>Extras</h1>
			</div>

		);
	}
}
export default Title;
