import Pharm from './Pharm';
import About from './About';
import RegisterForm from './Register';
import LoginForm from './Login';
import { BrowserRouter, Routes, Route } from 
 'react-router-dom';


function App(){
    return(
        
        <>
        
        <BrowserRouter basename="/bootcamp/">
        
            <Routes>

                <Route path="/home" element={<Pharm/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/" element={<RegisterForm/>}/>

            </Routes>
            
          
        </BrowserRouter>

        
        </>
        
        
    );
}

export default App;