import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} index />
          <Route path="*" element={<NotFoundPage />} index />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
