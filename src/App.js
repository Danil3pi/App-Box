import './App.css';

import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Main from './Components/Main/Main.jsx';
import Functions from './Components/Functions/Functions.jsx';


function App(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <Header />
        <Nav data={props.state.navData} />
        <Main state={props.state} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>
        <Functions />
      </div>
    </div>
  );
}

export default App;
