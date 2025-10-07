import './App.css';
import LifecycleDemo from './ClassComponentLifeCycle';
import UserDetailsForm from './usrDtl';
// import Calculator from './cal';
// import CaseConverter from './cls';
// import CaseConverter from './cls';
// import FromViewToCompClass1 from './new';
import Stringli from './stringli';
function App() {
  return (
    <div className="App">
      {/* <FromViewToCompClass1/> */}
      <UserDetailsForm/>
      <LifecycleDemo number="5"/>
      {/* <CaseConverter/> */}
      {/* <Calculator/> */}
    {/* <CaseConverter/> */}
    <Stringli/>
    </div>
  );
}
//
export default App;