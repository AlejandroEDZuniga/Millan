import React, { useState, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router";
// import  Home  from "../assets/styles/Home.css"
import Search from "./Search";
import { buscarProducto } from "../store/slices/winesReducer";
import { useDispatch, useSelector } from "react-redux";
import { getWine } from "../store/slices/winesReducer";
import { setSearchTrue } from "../store/slices/searchReducer";

const Home = () => {
  const navigate = useNavigate();
  const wines = useSelector((state) => state.wines);
  const search = useSelector((state) => state.search);
  const [brand, setBrand] = useState("Marca");
  const [varietal, setVarietal] = useState("Varietal");
  const [harvest, setHarvest] = useState("Cosecha");
  const [lotNumber, setLotNumber] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setBrand({ selectedValue: e.target.value });
    setLotNumber(e.target.value);
  };
  const data = {
    brand,
    varietal,
    harvest,
    lotNumber,
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(getWine(data));
    dispatch(setSearchTrue());
    // setTimeout(() => {
    // navigate("/results")
    // }, 1000);
  };
  useEffect(() => {}, [wines]);

  return (
    <div className="container">
      <div className="ulContainer">
        <form onSubmit={handleSearch}>
          <div className="containerItem">
            <NavDropdown title={brand} className="drop">
              <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                <option
                  value="CORDERO CON PIEL DE LOBO"
                  onChange={(e) => handleChange(e)}
                >
                  CORDERO CON PIEL DE LOBO
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                <option
                  value="PERRO CALLEJERO"
                  onChange={(e) => handleChange(e)}
                >
                  PERRO CALLEJERO
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                <option value="PISPI" onChange={(e) => handleChange(e)}>
                  PISPI
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                <option
                  value="SAPO DE OTRO POZO"
                  onChange={(e) => handleChange(e)}
                >
                  SAPO DE OTRO POZO
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                <option
                  value="MOSQUITA MUERTA"
                  onChange={(e) => handleChange(e)}
                >
                  MOSQUITA MUERTA
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                <option value="MALCRIADO" onChange={(e) => handleChange(e)}>
                  MALCRIADO
                </option>
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <div className="containerItem">
            <NavDropdown title={varietal} className="drop">
              <NavDropdown.Item onClick={(e) => setVarietal(e.target.value)}>
                <option value="Malbec" onChange={(e) => handleChange(e)}>
                  Malbec
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setVarietal(e.target.value)}>
                <option value="Blend" onChange={(e) => handleChange(e)}>
                  Blend
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setVarietal(e.target.value)}>
                <option value="Bonarda" onChange={(e) => handleChange(e)}>
                  Bonarda
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setVarietal(e.target.value)}>
                <option
                  value="Cabernet Suavignon"
                  onChange={(e) => handleChange(e)}
                >
                  Cabernet Suavignon
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setVarietal(e.target.value)}>
                <option value="Torrontes" onChange={(e) => handleChange(e)}>
                  Torrontes
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => setVarietal(e.target.value)}>
                <option value="Syrah" onChange={(e) => handleChange(e)}>
                  Syrah
                </option>
              </NavDropdown.Item>
            </NavDropdown>
          </div>

          <div className="containerItem">
            <NavDropdown title={harvest} className="drop">
              <NavDropdown.Item>
                <option
                  value="2016"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2016
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <option
                  value="2017"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2017
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <option
                  value="2018"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2018
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <option
                  value="2019"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2019
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <option
                  value="2020"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2020
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <option
                  value="2021"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2021
                </option>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <option
                  value="2022"
                  onClick={(e) => setHarvest(e.target.value)}
                >
                  2022
                </option>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <div className="form-group">
            <input
              type="number"
              placeholder="Nro. Lote"
              className="drop"
              value={lotNumber}
              onChange={(e) => setLotNumber(e.target.value)}
            />
          </div>
          <div className="buttonContainer">
            {/* <button className="button">Verificación</button> */}

            <input
              type="submit"
              placeholder="Submit"
              value="Verificar"
              className="button"
            />
          </div>
        </form>
      </div>
      {/* <div className="infoContainer">
        <Search />
      </div> */}
      <div className="infoContainer">
        {wines.length > 0 ? (
          <div>
            <div>
              <div>LOTE {wines[0].lotnumber}</div>
              <div>
                {wines[0].brand} {wines[0].varietal} {wines[0].harvest}
              </div>
              <br />
            </div>
            {wines.map((wines, id) => (
              <div key={id}>
                {/* <div>LOTE {wines.lotnumber}</div>
                <div>
                  {wines.brand} {wines.varietal} {wines.harvest}
                </div> */}
                <div>
                  Factura de exportación Nro: {wines.exportbill} - Fecha de
                  despacho: {wines.dispatchday} - Mercado de destino:{" "}
                  {wines.destiny}
                </div>
                <div>
                  Producido y fraccionado por Millan S.A. INV B70417, EXP
                  B89997.
                </div>
                <br />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {wines.length === 0 && search ? (
              <div>
                <h1> No se encontro ningun resultado</h1>
              </div>
            ) : (
              <div>
                <h1> Realice su busqueda</h1>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
