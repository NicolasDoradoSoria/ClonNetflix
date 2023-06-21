import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../context/userContext/UserContext";
import Home from "../pages/home/home/Home";
import Login from "../Components/login/Login";
import { BrowserRouter as Router } from "react-router-dom";
import SignUp from "../Components/signUp/SignUp";
import Layout from '../Components/header/Layout'
import MovieView from "../pages/movie/MovieView/MovieView";

const AppRouter = () => {
    //userContext   
    const userContext = useContext(UserContext);
    const { loading } = userContext;

    return (
        <Router>
            <Layout>


                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/nueva-cuenta" element={<SignUp />} />
                    <Route exact path="/movie/:id" element={<MovieView/>} />

                    {(!loading) ?
                        <>

                        </> : <></>}
                </Routes>
            </Layout>
        </Router>
    );
}

export default AppRouter;