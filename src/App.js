import React,{useState} from 'react';
import './App.css';
import AddressInfo from './component/BasicInfo/AddressInfo';
import PropertyType from './component/BasicInfo/PropertyType';
import LifeSupportEquiment from './component/SolarInfo/LifeSupportEquiment';
import SolarPanel from './component/SolarInfo/SolarPanel';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  const [input,setInput] = useState('')
  const address=([{ adress: 'unit 38 50' },
      { adress: 'barangaroo' }, { adress: 'concord west' },
       { adress: 'Ainslie' }, {adress: 'Barton'}, 
       { adress: 'Belconnen' }, { adress: 'Calwell' },
       { adress: 'Canberra Bc' }, { adress: 'concord west' },
        { adress: 'Charnwood' }, { adress: 'Dickson' },
         { adress: 'Fadden' }])
  return (
    <Router>
    <Routes>
     <Route path='/' element = {<AddressInfo input ={input} setInput ={setInput} 
      address={address.filter((add) =>{return add.adress.toLowerCase().includes(input)})} 
      /> }/>
     <Route path='/property' element ={<PropertyType/>} />
     <Route path='/solar' element ={<SolarPanel/>} />
     <Route path ='/lifeSupportEquiment' element ={<LifeSupportEquiment/>}/>
    </Routes> 
    </Router>
  
  );
}

export default App;
