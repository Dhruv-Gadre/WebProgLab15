import React from 'react';
import FocusForm from './components/FocusForm.jsx';
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";
import { StyledButtonExternal } from "./components/StyledButton.jsx";
import LifeCycleDemo from "./components/LifeCycleDemo.jsx";
import { CounterUseState, CounterUseReducer } from './components/Counter.jsx';
import JokeFetcher from "./components/JokeFetcher.jsx";
import FormRef from "./components/FormRef.jsx"
function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer/>      
      <StyledButtonExternal/>
      <LifeCycleDemo />
      <CounterUseState />
      <CounterUseReducer />
      <JokeFetcher />
      <FormRef/>
      <FocusForm />
      
    </>
  );
}

export default App;
