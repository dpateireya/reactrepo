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
import Covidpage from "../covidpage/Covidpage";
import Home from "../crudoperation/Home";
import Create from "../crudoperation/Create";
import Update from "../crudoperation/Update";

const RoutePage = () => {
  return (
    <>
      <BrowserRouter basename="/reactrepo">
        <Navbar />
        <Routes>
          <Route path="/" index element={<Welcome />} />
          <Route path="accordion" element={<Accordion />} />
          <Route path="showads" element={<Showads />} />
          <Route path="incredecre" element={<Incredecre />} />
          <Route path="timer" element={<Timer />} />
          <Route path="todo" element={<Todo />} />
          <Route path="keepnote" element={<Keepnote />} />
          <Route path="covid19" element={<Covidpage />} />
          <Route path="home" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutePage;
