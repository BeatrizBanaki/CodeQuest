import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CodeQuest from './components/CodeQuest';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div className="w-[100vw] h-[100vh] flex">
        <Routes>
          <Route path="/" element={<CodeQuest />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
