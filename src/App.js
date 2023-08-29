import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';



function App() {


  // let Name = "홍길동";
  
 
 
  return (

    <div className="App">
      <Nav />
      <div className='content'>
        <Content arrayNum = "0" />
        <Content arrayNum = "1" />
        <Content arrayNum = "2" />
        <Content arrayNum = "3" />
      </div>
      <div className='content'>
        <Content title="쌍둥이 아기판다1" desc="스페셜 이벤트1" />
        <Content title="쌍둥이 아기판다2" desc="스페셜 이벤트2" />
        <Content title="쌍둥이 아기판다3" desc="스페셜 이벤트3" />
        <Content title="쌍둥이 아기판다4" desc="스페셜 이벤트4" />
      </div>
    </div>
  );
}

export default App;
