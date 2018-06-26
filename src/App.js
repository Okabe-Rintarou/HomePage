import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Content/>
            <Header/>

         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Testeee</h1>
		<h1>Uia</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default App;
