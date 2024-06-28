import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{
  BrowserRouter,
  Route,
  Routes
  
}from "react-router-dom";
function App() {
  const[mode,setmode]=useState('light'); //Whether Dark mode is enabled or not
  const[alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
     setTimeout(() => {
      setAlert(null);
     },1500 );
        
      };

  const togglemode=()=>{
    if(mode==='light'){
        setmode('dark');
document.body.style.backgroundColor='#042743';
showAlert("Dark mode has been Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been Enabled","success");
    }
  
  };
    /* const removebodyClasses=()=>{  //we did this because when we are clicking on any color button its need to be reloaded again for next colour cause if we click on danger it high priority than any one so remaing buttons not loded again
      document.body.classList.remove('bg-light')
      document.body.classList.remove('bg-dark')
      document.body.classList.remove('bg-warning')
      document.body.classList.remove('bg-success')
      document.body.classList.remove('bg-primary') 

    }  //for colour chainging pallete
  const togglemode=(cls)=>{
    removebodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
        setmode('dark');
document.body.style.backgroundColor='#042743';
showAlert("Dark mode has been Enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been Enabled","success");
    }
  
  }*/


  
  return (
    <>
<BrowserRouter>
 
<Navbar title="TextUtils" about="About TextUtils" mode={mode} togglemode={togglemode}/>
  <Alert alert={alert}/>
  <div className='container my-3'>

 <Routes>
  <Route path="/about"element={<About mode={mode}/>}>
  </Route>
  <Route path="/" element={<TextForm  showAlert={showAlert}heading="Enter the text to Analyse:"  mode={mode}/>}>
 

  </Route>
  </Routes>

      
    
  </div>
     
</BrowserRouter>
   </>
     
   
  );
}

export default App;
