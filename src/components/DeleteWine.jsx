import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { getWines, deleteWine } from "../store/slices/winesReducer";
// import { getWines } from "../store/slices/winesReducer";
// import { Space } from "antd";
// import "../assets/styles/Home.css";


const DeleteWine = () => {
  const wine = useSelector((state) => [...state.wines]);
  const isLogIn = useSelector((state) => state.isLogIn);
  const user = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  let handleError = true;

  const handleRemove = (id) => {
    handleError = !handleError;
    const dato = {
      id: id,
    };
    dispatch(deleteWine(dato)).then(() => dispatch(getWines(), []));
  };
  const handleRefresh = () => {
    if (isLogIn) dispatch(getWines());
  };

  useEffect(() => {
    if (isLogIn) dispatch(getWines());
    else toast.success("Por favor Inicie Sesión");
  }, []);

  return (
    <div className="editContainer">
      <div className="row">
        <div className="col-md-12 my-3 text-end">
          {/* <Link to="/add" className="btn btn-outline-dark">
            Agregar Contacto
          </Link> */}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleRefresh()}
          >
            Refrescar
          </button> */}
        </div>
        <div className="">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Varietal</th>
                <th scope="col">Cosecha</th>
                <th scope="col">Numero de lote</th>
                <th scope="col">Factura</th>
                <th scope="col">Dia de despacho</th>
                <th scope="col">Destino</th>
              </tr>
            </thead>
            <tbody>
              {wine.map((wine, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{wine.brand}</td>
                  <td>{wine.varietal}</td>
                  <td>{wine.harvest}</td>
                  <td>{wine.lotnumber}</td>
                  <td>{wine.exportbill}</td>
                  <td>{wine.dispatchday}</td>
                  <td>{wine.destiny}</td>
                  <td>
                    {/* <Link
                      to={`edit/${wine.id}`}
                      className="btn btn-small btn-primary pr-2 "
                    >
                      Editar
                    </Link> */}
                    <button
                      type="button"
                      onClick={() => handleRemove(wine.id)}
                      className="btn btn-small btn-danger"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeleteWine;
