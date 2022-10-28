// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Square from './Square';

import Header from './Header';
import Footer from './Footer';

import Board from './Board';


function App(){
  return(
    <div className="">
      <Header />

      <Square className="gray" textContent="Hello" index="1"/>
      <Square className="blue" textContent="World" index="2"/>
      <Square textContent="This is " />
      <Square className="red" />
      <hr/>
      <Board />
      <hr/>
      
      <Footer textContent="The Footer" />
    </div>
  );
}

export default App;
