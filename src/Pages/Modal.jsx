import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Modal() {
  const [isopen, setIsopen] = useState(false);

  return (
    <>
      <button
        className="bg-cyan-500 py-2 px-6 rounded-lg text-white font-bold m-5"
        onClick={() => setIsopen(true)}
      >
        Open Modal
      </button>

      {isopen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
            <div>

              <h2>Agregar Vehículo</h2>

              <form>
                <label>Modelo:</label>
                <input type="text" />


                <label>Marca:</label>
                <input type="text" />


                <label>Descripción:</label>
                <textarea />

                <button
                  className="bg-cyan-500 py-2 px-6 rounded-sm text-white font-bold m-5"
                  onClick={()=>setIsopen(false)}
                >
                  Cerrar Modal
                </button>
              </form>

            </div>

          </div>
        </div>
      )}

    </>
  );
}
