import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ char }) => {
  const { dispatch } = useCharStates();

  const AddFav = () => {
    dispatch({ type: "ADD_FAV", payload: char });
  };

  return (

    <div className="flex flex-wrap -mx-2">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-2 mb-4">
        <div className="flex w-full p-2 rounded-lg shadow-xl">
          <img
            className="object-cover w-40 h-40 mr-4"
            src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
            alt="image"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold tracking-tight text-blue-600 mb-2">
                react tailwind horizontal card image
              </h4>
              <p className="text-gray-700 mb-2 leading-normal">
                react tailwind css horizontal card with image It is a long established
                fact that a reader will be distracted by the readable content.
              </p>
            </div>
            <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
              Read more
            </button>
          </div>
        </div>
      </div>

      {/* Puedes agregar más tarjetas aquí según sea necesario */}
    </div>


    /*
    <div className="md:flex border m-10 grid grid-cols-2 gap-8">
      <div className="p-2 md:flex-shrink-0">
        <img
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          width="448"
          height="299"
          alt="Woman paying for a purchase"
          className="rounded-lg"
        />
      </div>
      <div className="mt-4">
        <div className="uppercase text-sm text-indigo-600 font-bold">
          MARKETING
        </div>
        <a
          href="google.com"
          className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
        >
          Finding customers for your new business
        </a>
        <p className="mt-2 text-gray-900">
          Getting a new business off the ground is a lot of hard work. Here
          are five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
    */
  );
};

export default Card;