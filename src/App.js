import "./App.css";

import "./styles/scss/sb-admin-2.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Animations from "./pages/Animations";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InvalidRoute from "./pages/InvalidRoute";
import ForgotPassword from "./pages/ForgotPasswor";
import Others from "./pages/Others";
import Blank from "./pages/Blank";
import Colors from "./pages/Colors";
import Borders from "./pages/Borders";
import Buttons from "./pages/Buttons";
import Cards from "./pages/Cards";
import Charts from "./pages/Charts";
import Tables from "./pages/Tables";
import Students from "./pages/Students";
import Teachers from "./pages/Teachers";
import ViewTeachers from "./pages/ViewTeacher";
import ViewStudents from "./pages/ViewStudent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="animation" element={<Animations />} />
            <Route path="other" element={<Others />} />
            <Route path="blank" element={<Blank />} />
            <Route path="cards" element={<Cards />} />
            <Route path="color" element={<Colors />} />
            <Route path="buttons" element={<Buttons />} />
            <Route path="border" element={<Borders />} />
            <Route path="charts" element={<Charts />} />
            <Route path="tables" element={<Tables />} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="students" element={<Students />} />
            <Route path="teachers/:teacher" element={<ViewTeachers />} />
            <Route path="students/:student" element={<ViewStudents />} />
          </Route>

          <Route path="*" element={<InvalidRoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
