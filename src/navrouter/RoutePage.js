import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Welcome from "./Welcome";
import Accordion from "../accordion/Accordion";
import Keepnote from "../keepnote/Keepnote";
import Showads from "../showads/Showads";
import Incredecre from "../incredecre/Incredecre";
import Timer from "../timer/Timer";
import Todo from "../todo/todo1/Todo";
import Nopage from "./Nopage";

const RoutePage = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Welcome />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="showads" element={<Showads />} />
          <Route path="incredecre" element={<Incredecre />} />
          <Route path="timer" element={<Timer />} />
          <Route path="todo" element={<Todo />} />
          <Route path="keepnote" element={<Keepnote />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutePage;
