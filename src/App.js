// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Square from './Square';

import Header from './Header';
import Footer from './Footer';

import Board from './Board';

import SampleForm from './SampleForm';

import DynamicForm from './DynamicForm';

import EmployeeList from './EmployeeList';

import CityMunsList from './CityMunsList';

function App(){
  return(
    <div className="">
      <CityMunsList/>
      <hr />
      <EmployeeList/>
      <hr />
      <DynamicForm/>
      <hr />

      <SampleForm />
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
