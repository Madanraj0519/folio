
import Home from "./pages/HomePage";
import Blog from "./pages/BlogPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShowDarkModeProvider } from "./DarkMode";




function App() {

  return (
    <ShowDarkModeProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
     </Router>
    </ShowDarkModeProvider>
  );
}

export default App;
