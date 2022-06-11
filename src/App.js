import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddWine from "./components/AddWine";
// import AddContact from "./components/AddContact";
// import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";
import ShowResults from "./components/ShowResults";
// import DefaultLayout from "./components/DefaultLayout";
// import contactReducer from "./redux/slices/contactReducer";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer />
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/add" element={<AddWine />} />
              <Route path="/login" element={<Login />} />
              <Route path="/results" element={<ShowResults/>}/>
            </Routes>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
