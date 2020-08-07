import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import {Greet}  from './component/Greet';
// import Welcome from './component/Welcome';
// import Hello from './component/Hello'
// import Message from './component/Message'
// import Counter from './component/Counter';
// import EventBind from './component/EventBind';
// import ParentComponent from './component/ParentComponent';
// import UserGreeting from './component/UserGreeting';
// import NameList from './component/NameList';
// import Stylesheet from './component/Stylesheet';
// import Inline from './component/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css' //module styles must be import like above
// import Form from './component/Form';
// import LifecycleA from './component/LifecycleA'
// import FragmentDemo from './component/FragmentDemo';
// import Table from './component/Table';
// import PureComp from './component/PureComp';
// import ParentComp from './component/ParentComp';
// import RefsDemo from './component/RefsDemo';
// import FocusInput from './component/FocusInput';
// import FRParentInput from './component/FRParentInput';
// import PortalDemo from './component/PortalDemo';
import Hero from './component/Hero';
import ErrorBoundary from './component/ErrorBoundary';

//Error Boundary
// https://www.youtube.com/watch?v=DNYXgtZBRPE&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=32
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Error boundary can be within the component or within the entire applications */}
        <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary>
      </div>
    )
  }
}

//Portals
// https://www.youtube.com/watch?v=HpHLa-5Wdys&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=31
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <PortalDemo />
//       </div>
//     )
//   }
// }

//Refs with Forward input
// https://www.youtube.com/watch?v=RLWniwmfdq4&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=30
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <FRParentInput />
//         {/* <FocusInput /> */}
//         {/* <RefsDemo /> */}
//       </div>
//     )
//   }
// }

// //PureComponent & Memo
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <ParentComp />
//         {/* <PureComp /> */}
//       </div>
//     )
//   }
// }


// //Fragment or EmptyTag
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <FragmentDemo />
//         <Table />

//         {/* <LifecycleA /> */}
//       </div>
//     )
//   }
// }


// //Form Handling
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <Form />
//       </div>
//     )
//   }
// }

// //Styling and CSS Basics
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <h1 className='error'>Error</h1>
//         <h1 className={styles.success}>Sucess</h1>

//         <Stylesheet primary={true}/>{/* Class styling using css file*/}
//         <Inline />{/*Inline styling */}
//       </div>
//     )
//   }
// }


// //List using index as key anti-pattern
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <NameList />
//         {/* <UserGreeting /> */}
//       </div>
//     )
//   }
// }

// //Method as Props
// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <ParentComponent />
//       </div>
//     );
//   }
// }

// //Event Handlers
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <EventBind />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <Greet />
//       {/*<Welcome /> */}
//       {/* <Hello /> */}
//     </div>
//   );  
// }

//Props are immutable i.e.,Values can't be changed
// class App extends Component{
//   render(){
//     return (
//      <div className="App">
//         <Greet name='Jones' heroName='BatMan'>
//           <p>Bad Boy</p>
//         </Greet>
//         <Greet name='Hayas' heroName='Joker'>
//           <button>Good One</button>
//         </Greet>
//         <Greet name='Praga' heroName='Ironman' />

//         <Welcome name='Jones' heroName='BatMan'/>
//         <Welcome name='Hayas' heroName='Joker' />

//         {/* <Hello /> */}
//       </div>
//     );
//   }
// }

// //State usage in components
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Message />
//       </div>
//     );
//   }
// }

//setState Co
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Counter />
//       </div>
//     );
//   }
// }

//Props and State management
// class App extends Component{
//   render(){
//     return (
//      <div className="App">
//         <Greet name='Jones' heroName='BatMan'>
//         </Greet>
//         <Welcome name='Pradeep' heroName='Ironman'>
//         </Welcome>
//       </div>
//     )
//   }
// }
export default App;