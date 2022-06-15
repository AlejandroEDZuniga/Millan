import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addWine } from "../store/slices/winesReducer";
import { NavDropdown } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import "../assets/styles/AddWine.css"
import imagen from "../assets/images/Frente-Bodega.jpeg"
import Error404 from "./Error404";


const AddWine = () => {
  const isLogIn = useSelector((state) => state.isLogIn);
  const {isadmin} = useSelector ((state)=> state)
  const user = useSelector((state) => state.loggedUser);

  const [brand, setBrand] = useState("Marca");
  const [varietal, setVarietal] = useState("Varietal");
  const [harvest, setHarvest] = useState("Cosecha");
  const [lotnumber, setLotNumber] = useState("");
  const [exportbill, setExportBill] = useState("");
  const [dispatchday, setDispatchDay] = useState("");
  const [destiny, setDestiny] = useState("Destino");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVarietal({ selectedValue: e.target.value });
    setBrand({ selectedValue: e.target.value });
    setHarvest({ selectedValue: e.target.value });
    setDestiny({ selectedValue: e.target.value });
  };
  // console.log("esto seria: ", varietal)
  // console.log("y esto marca", brand)
  console.log("usuario con true o", user.isadmin)

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      brand,
      varietal,
      harvest,
      lotnumber,
      exportbill,
      dispatchday,
      destiny,
    };
    console.log("data soy yo ", data);
    dispatch(addWine(data));
    toast.success("Registro agregado satisfactoriamente");
    navigate("/");
  };

  return (
    <div className="add">
      {!isLogIn && isadmin ? (
        <Error404/> )
      : (
      <div className="col-md-6 shadow mx-auto p-5">
        <div className="row">
          <h1 className="display-3 my-5 text-center">Agregar Registro</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group ">
              <NavDropdown title={brand} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e) => setBrand(e.target.value)}>
                  <option
                    value="CORDERO CON PIEL DE LOBO"
                    onChange={(e) => handleChange(e)}
                  >
                    CORDERO CON PIEL DE LOBO
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
            <div className="form-group ">
              <NavDropdown title={varietal} id="basic-nav-dropdown">
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
                  <option value="Torrontes" onChange={(e) => handleChange(e)}>
                    Torrontes
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
              </NavDropdown>
            </div>
            <div className="form-group">
              <NavDropdown title={harvest} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2016" onChange={(e) => handleChange(e)}>
                    2016
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2017" onChange={(e) => handleChange(e)}>
                    2017
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2018" onChange={(e) => handleChange(e)}>
                    2018
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2019" onChange={(e) => handleChange(e)}>
                    2019
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2019" onChange={(e) => handleChange(e)}>
                    2019
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2020" onChange={(e) => handleChange(e)}>
                    2020
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2021" onChange={(e) => handleChange(e)}>
                    2021
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setHarvest(e.target.value)}>
                  <option value="2022" onChange={(e) => handleChange(e)}>
                    2022
                  </option>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="form-group ">
              <input
                type="number"
                placeholder="Numero de Lote"
                className="form-control"
                value={lotnumber}
                onChange={(e) => setLotNumber(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <input
                type="number"
                placeholder="Factura de Exportación"
                className="form-control"
                value={exportbill}
                onChange={(e) => setExportBill(e.target.value)}
              />
            </div>
            <div className="form-group ">
              <input
                type="number"
                placeholder="Fecha de despacho"
                className="form-control"
                value={dispatchday}
                onChange={(e) => setDispatchDay(e.target.value)}
              />
            </div>
            <div className="form-group">
              <NavDropdown title={destiny} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={(e) => setDestiny(e.target.value)}>
                  <option value="BRASIL" onChange={(e) => handleChange(e)}>
                    BRASIL
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setDestiny(e.target.value)}>
                  <option value="BOLIVIA" onChange={(e) => handleChange(e)}>
                    BOLIVIA
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setDestiny(e.target.value)}>
                  <option value="PERÚ" onChange={(e) => handleChange(e)}>
                    PERÚ
                  </option>
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => setDestiny(e.target.value)}>
                  <option value="ECUADOR" onChange={(e) => handleChange(e)}>
                    ECUADOR
                  </option>
                </NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className="form-group">
              <input
                type="submit"
                placeholder="Submit"
                value="Agregar Registro"
                className="btn btn-block btn-dark"
              />
            </div>
          </form>
        </div>
      </div>)
}
    </div>
  );
};

export default AddWine;
