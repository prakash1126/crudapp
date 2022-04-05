
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import {Route, Switch} from 'react-router-dom';
import Detail from './components/Detail';
function App() {
  return (
   <>
   <NavBar/>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/register" component={Register}/>
    <Route expact path="/edit/:id" component={Edit}/>
    <Route expact path="/view/:id" component={Detail}/>
   </Switch>
   
   </>
  );
}

export default App;
