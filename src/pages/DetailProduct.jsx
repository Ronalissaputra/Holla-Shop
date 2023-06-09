import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import Layout from "../layouts/Layout";

const DetailProduct = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const getByIdProduct = async (id) => {
    setLoading(true);
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    setDetails(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getByIdProduct(id);
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="w-full min-h-screen flex items-center justify-center">
          <p className="text-2xl font-light">Loading...</p>
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-2 mt-6">
            <BiArrowBack className="font-bold text-slate-800 text-xl" />
            <Link to="/" className="text-xl text-slate-800">
              Kembali
            </Link>
          </div>
          <div className="flex justify-center items-center mt-5 mx-2">
            <div className="border-2 border-slate-200 lg:h-[500px] h-[300px] rounded-lg lg:w-[50%] w-full">
              <img
                src={details.thumbnail}
                alt="product image"
                className="w-full h-full rounded-lg"
              />
              <div className="px-2">
                <p className="text-2xl ">{details.title}</p>
                <p className="text-lg">{details.description}</p>
                <div className="my-2">
                  <p className="flex items-center">
                    Price <BsArrowRightShort /> {details.price}
                  </p>
                  <p className="flex items-center">
                    Ranting <BsArrowRightShort /> {details.rating}
                  </p>
                  <p className="flex items-center">
                    Stock <BsArrowRightShort /> {details.stock}
                  </p>
                </div>
                <button className="bg-indigo-700 w-full py-2 rounded-full mb-2">
                  <p className="font-light text-xl text-slate-50">Add Card</p>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default DetailProduct;
