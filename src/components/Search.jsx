import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWine } from "../store/slices/winesReducer";
import axios from "axios";

const Search = () => {
  const wines = useSelector((state) => state.wines);
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if (search) {
  //     axios.get(`/api/wines/`).then((res) => res.data);
  //     // .then((data) => {
  //     //     // dispatch(setProductos(shuffle(data)));
  //     // });
  //   }
  // }, [wines, dispatch]);
  return (
    <div>
      {search ? (
        <div>
          <div>LOTE {wines[0].lotnumber}</div>
          <div>{wines[0].brand} {wines[0].varietal} {wines[0].harvest}</div>
        <div>
          Factura de exportación Nro: {wines[0].exportbill} - Fecha de despacho:{" "}
          {wines[0].dispatchday} - Mercado de destino: {wines[0].destiny}
        </div>
        <div>Producido y fraccionado por Millan S.A. INV B70417, EXP B89997.</div>
        </div>
      ) : (
        <h1> Realice su busqueda</h1>
      )}
    </div>
  );
};

export default Search;
