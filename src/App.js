import { Provider, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddWine from "./components/AddWine";
import DeleteWine from "./components/DeleteWine";
// import AddContact from "./components/AddContact";
// import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ShowResults from "./components/ShowResults";
import Error404 from "./components/Error404";
// import DefaultLayout from "./components/DefaultLayout";
// import contactReducer from "./redux/slices/contactReducer";
import store from "./store/store";

function App() {

  const { isLogIn, loggedUser } = useSelector((state)=> state)
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/add" element={<AddWine />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/results" element={<ShowResults />} />
              {/* <Route path="/edit" element={<DeleteWine />} /> */}
              <Route
                exact
                path="/add"
                element={
                  isLogIn && loggedUser.isadmin ? <AddWine/> : <Error404/>
                }
              />
              <Route
                exact
                path="/edit"
                element={
                  isLogIn && loggedUser.isadmin ? <DeleteWine/> : <Error404/>
                }
              />
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
