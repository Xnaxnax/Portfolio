import { useState } from 'react';
import './App.css';
import Calculator from './component/Calculator/Calculator';
import CompWrapper from './component/FirstPage/CompWrapper/CompWrapper';
import Modal from './component/FirstPage/Modal/Modal';

function App() {

  const [value, setValue] = useState(false)

  console.log(value)

  return (
    <div className="App">
      <div className='vitrina'>
        <h2 className='title-vitrina'>Всем привет. Хочу показать вам первый проект моего портфолио </h2>
        <CompWrapper/>
      </div>
      <div onClick={() => setValue(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#FF2E65" class="bi bi-basket app_button" viewBox="0 0 16 16">
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </div>
      {value ? <Modal setValue={setValue}/> : null}
      <Calculator/>
    </div>
  );
}

export default App;
