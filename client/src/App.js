import Navbar from './components/navbar/Navbar';
import Card from './components/subreddit/Card';

import "./App.css";

function App() {
  return (
    <>
     <Navbar />
     <div className="flex_column" style={{ marginTop: '60px' }}>
       <Card />
     </div>
    </>
  );
}

export default App;
