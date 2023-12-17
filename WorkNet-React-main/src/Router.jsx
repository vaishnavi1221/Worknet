import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import WorkerPage from "./pages/WorkerPage";
// import Worker from "./pages/Worker";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="" element={<Home />} />
          {/* Routes For Each App */}
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/worker-find"
            element={<WorkerPage />}
          />

        </Routes>
      </BrowserRouter>
    </>
  );
}