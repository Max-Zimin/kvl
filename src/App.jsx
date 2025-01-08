import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu, { menuButtonsText } from './components/Menu/Menu';
import Container from './components/Container/Container';
import VkNews from './components/Container/VkNews/VkNews';

export default function App() {

  const [button, setButton] = useState(menuButtonsText[0]);

  return (
    <div className="App">
      <Header/>
      <Menu button={button} setButton={setButton}/>
      <Container state={button}/>
      <VkNews/>
    </div>
  );
}

