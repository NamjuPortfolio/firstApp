import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Content from './components/Content';
import Nav from './components/Nav';
import Main from './pages/Main';
import About from './pages/About';
import NotPage from './pages/NotPage';
// import Styled from './components/Styled';



function App() {


  // let Name = "홍길동";
  
 
 
  return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/*" element={<NotPage/>}/>
          
        </Routes>
      </>


    // <div className="App">
    //   <div className='content'>
    //     <Content arrayNum = "0" />
    //     <Content arrayNum = "1" />
    //     <Content arrayNum = "2" />
    //     <Content arrayNum = "3" />
    //   </div>
    //   <div className='content'>
    //     <Content title="쌍둥이 아기판다1" desc="스페셜 이벤트1" />
    //     <Content title="쌍둥이 아기판다2" desc="스페셜 이벤트2" />
    //     <Content title="쌍둥이 아기판다3" desc="스페셜 이벤트3" />
    //     <Content title="쌍둥이 아기판다4" desc="스페셜 이벤트4" />
    //   </div>
    //   <Styled/>
    // </div>
  );
}

export default App;
