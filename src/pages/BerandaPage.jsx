import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import axios from "axios";

function BerandaPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProduk = async () => {
    setLoading(true);
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
    setLoading(false);
  };

  useEffect(() => {
    getProduk();
  }, []);
  return (
    <Layout>
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <p className="text-2xl font-light">Loading...</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-2">
            {products.map((item, index) => {
              return (
                <Link
                  to={`product/detail/${item.id}`}
                  key={index}
                  className="border-2 border-slate-200 h-auto rounded-lg"
                >
                  <img
                    src={item.thumbnail}
                    alt="product image"
                    className="w-full h-64 rounded-lg"
                  />
                  <div className="px-2">
                    <p className="text-2xl ">{item.title}</p>
                    <p className="text-lg">{item.description}</p>
                    <div className="flex space-x-2 my-2">
                      <p className="bg-indigo-700 p-1 px-5 flex justify-center items-center rounded-full text-slate-50 font-light">
                        $ {item.price}
                      </p>
                      <p className="bg-indigo-700 p-1 px-5 flex justify-center items-center rounded-full text-slate-50 font-light">
                        Ranting {item.rating}
                      </p>
                      <p className="bg-indigo-700 p-1 px-5 flex justify-center items-center rounded-full text-slate-50 font-light">
                        Stock {item.stock}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </Layout>
  );
}

export default BerandaPage;
