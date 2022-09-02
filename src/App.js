import logo from './logo.svg';
import './App.css';
import SimpleState from './StateFunctional/SimpleState';

import {Link,NavLink,Route,Routes} from 'react-router-dom'
import PageNotFound from './PageNotFound';
import { CheckRouters } from './StateFunctional/CheckRouters';

import { ContactManager } from './StateFunctional/ContactManager';
import data from './StateFunctional/contactdata';

import { Parent } from './LCM/Parent';

import NavBar from './NavBar';

import { ContactManagerServer } from './ContactManager/ContactManagerServer';

import { FetchApi } from './LCM/FetchApi';
import FormHook from './HookConsumers/FormHook';
// import InpComponent from './CustomHooks/FormsHooks';

import ContextProviderEg from './ContextCreation/ContextProviderEg';

import CounterConnector from "./React Redux Setup/CounterConnector"

import GetUserConnector from './component/GetUserConnector';

function App() {
  console.log("app.js");
  return (
    
    <div className="App bg-black text-light">
      {/* <ContactManagerServer></ContactManagerServer> */}
      {/* <Parent></Parent> */}
      <NavBar></NavBar>
     <h1>hello function</h1>
     {/* <CounterConnector></CounterConnector> */}
     {/* <GetUserConnector></GetUserConnector> */}

     {/* <NavLink 
      to = '/router'
      style={({isActive})=>({color:isActive?'red':'yellow'})}
      > 
        Go to router
     </NavLink> */}

     {/* <NavLink
        to="/faq/:myquery"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >
        FAQs
      </NavLink> */}



      {/* <br></br>
     <Link to = '/contact'>
        Go to Contact
     </Link> */}

     <Routes>
      <Route path = '/' element={<SimpleState></SimpleState>}></Route>
      <Route path='/contact' element={<ContactManager data={data}></ContactManager>}></Route>
      <Route path='/contactServer' element={<ContactManagerServer></ContactManagerServer>}></Route>
      <Route path = '/router' element={<CheckRouters></CheckRouters>}></Route>
      <Route path="/fetch" element={<FetchApi></FetchApi>}></Route>
      <Route path='formHook' element={<FormHook></FormHook>}></Route>
      <Route path = '/faq/:query' element={<CheckRouters></CheckRouters>}></Route>
      <Route path='/contextEg' element={<ContextProviderEg></ContextProviderEg>}></Route>
      <Route path ='*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     {/* <SimpleState/> */}
    </div>
  );
}

export default App;
