import React from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import "../assets/styles/Home.css";
import { Card, Button } from "react-bootstrap";

const ShowResults = () => {
  const navigate = useNavigate;
  const wines = useSelector((state) => state.wines);
  const search = useSelector((state) => state.search);
  console.log("wineresults", wines);
  return (
    <div>
      {wines.length != 0 ? (
        <div>
          <div className="resultContainer">
            <div>LOTE {wines[0].lotnumber}</div>
            <div>
              {wines[0].brand} {wines[0].varietal} {wines[0].harvest}
            </div>
            <div>
              Factura de exportación Nro: {wines[0].exportbill} - Fecha de
              despacho: {wines[0].dispatchday} - Mercado de destino:{" "}
              {wines[0].destiny}
            </div>
            <div>
              Producido y fraccionado por Millan S.A. INV B70417, EXP B89997.
            </div>
          </div>
          <img src="http://www.mosquitamuertawines.com/wp-content/uploads/2013/10/CORDERO-BLEND-DE-MALBEC-ES-NEW.png" />
          <Card style={{ width: "18rem" }}>
            <div className="cardimg">
            <Card.Img variant="top"  src="http://www.mosquitamuertawines.com/wp-content/uploads/2013/10/CORDERO-BLEND-DE-MALBEC-ES-NEW.png" />
            </div>
            <Card.Body>
            
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div> No hay naranja</div>
      )}
    </div>
  );
};

export default ShowResults;
