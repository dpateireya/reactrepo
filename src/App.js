import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Welcome from "./Welcome";
import Accordion from "./accordion/Accordion";
import Keepnote from "./keepnote/Keepnote";
import Showads from "./showads/Showads";
import Incredecre from "./incredecre/Incredecre";
import Timer from "./timer/Timer";
import Todo from "./todo/todo1/Todo";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/accordion" element={<Accordion />} />
        <Route path="/showads" element={<Showads />} />
        <Route path="/incredecre" element={<Incredecre />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/keepnote" element={<Keepnote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
