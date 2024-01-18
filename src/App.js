
import './App.css';
import UserList from './component/UserList';

function App() {
  return (
    <div className="App">
      <video id="bgvid" autoPlay loop muted src="/video/bgvideo.mp4" />
      <UserList />
    </div>
  );
}

export default App;
