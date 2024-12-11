import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MyModal from "./pages/MyModal";
import NoPage from "./pages/NoPage";
import Counter from "./pages/Counter";
import MyQuiz from "./pages/MyQuiz";
import TodoList from "./pages/TodoList";
import MyAccordion from "./pages/MyAccordion";

function App(){
   return(
       <BrowserRouter>
           <Routes>
               <Route path="/" element={<Layout />}>
                   <Route index element={<Home />} />
                   <Route path="/modal" element={<MyModal />} />
                   <Route path="/counter" element={<Counter />} />
                   <Route path="/quiz" element={<MyQuiz />} />
                   <Route path="/todolist" element={<TodoList />} />
                   <Route path="/accordion" element={<MyAccordion />} />
                   <Route path="*" element={<NoPage />} />
               </Route>
           </Routes>
       </BrowserRouter>
   );
}

export default App;