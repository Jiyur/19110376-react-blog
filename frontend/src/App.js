import Header from "./views/components/Header";
import BlogFeater from "./views/feature";
import {  BrowserRouter,Route, Routes } from 'react-router-dom';
import BlogView from "./views/feature/BlogView";
import BlogForm from "./views/feature/BlogForm";
import BlogUpdate from "./views/feature/BlogUpdate";


function App() {
  return (
    <BrowserRouter>
       <Header />
       <Routes>
          <Route path="/" element={<BlogFeater />} />
          <Route path="/add" element={<BlogForm/>}  exact  ></Route>
          <Route path="/blog/:id" element={<BlogView/>} exact ></Route>
          <Route path="/edit/:id" element={<BlogUpdate/>} exact ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;