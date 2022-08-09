import logo from './logo.svg';
import './App.css';
import SimpleState from './StateFunctional/SimpleState';

import {Link,NavLink,Route,Routes} from 'react-router-dom'
import PageNotFound from './PageNotFound';
import { CheckRouters } from './StateFunctional/CheckRouters';
function App() {
  console.log("app.js");
  return (
    <div className="App bg-black text-light">
     <h1>hello function</h1>
     <NavLink 
      to = '/router'
      style={({isActive})=>({color:isActive?'red':'yellow'})}
      >
        Go to router
     </NavLink>

     <NavLink
  to="/faq/:myquery"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>







     <Link to = '/router'>
        Go to router
     </Link>
     <Routes>
      <Route path = '/' element={<SimpleState></SimpleState>}></Route>
      <Route path = '/router' element={<CheckRouters></CheckRouters>}></Route>
      <Route path = '/faq/:query' element={<CheckRouters></CheckRouters>}></Route>
      <Route path ='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     {/* <SimpleState/> */}
    </div>
  );
}

export default App;
