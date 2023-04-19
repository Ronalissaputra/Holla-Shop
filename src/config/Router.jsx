import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BerandaPage, ProdukPage, DetailProduct } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BerandaPage />} />
        <Route path="/product" element={<ProdukPage />} />
        <Route path="/product/detail/:id" element={<DetailProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
