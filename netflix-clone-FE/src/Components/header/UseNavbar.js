import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/userContext/UserContext";

const categories = [
    {
        name: "Accion",
        path: "Accion",
    },
    {
        name: "drama",
        path: "drama",
    },
    {
        name: "comedia",
        path: "comedia",
    },
    {
        name: "romance",
        path: "romance",
    },
    {
        name: "animacion",
        path: "animacion",
    },
];


const UseNavbar = () => {
  const navigate = useNavigate();

    // click en modo mobile para desplegar la barra de navegacion
    const [click, setClick] = useState(false)

    // hook de barra desplegable de la categoria
    const [dropdownCategory, setDropdownCategory] = useState(false)

    //userContext
    const userContext = useContext(UserContext);
    const { authenticatedUser, authenticated, signOff} = userContext;

    const handleClick = () => setClick(!click)


    // sirve para cuando paso el mouse por la categoria se despliegue el menu
    const onMouseEnterCategory = () => (window.innerWidth < 960) ? setDropdownCategory(false) : setDropdownCategory(true)
    const onMouseLeaveCategory = () => (window.innerWidth < 960) ? setDropdownCategory(false) : setDropdownCategory(false)
    
    // navega a login inciar secion
    const navigateToLogin = () => {
        navigate("/login")
    }
 
    useEffect(() => {
        authenticatedUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps    
    }, [])

    return {
        click,
        handleClick,
        onMouseLeaveCategory,
        onMouseEnterCategory,
        categories,
        dropdownCategory,
        authenticated,
        signOff,
        navigateToLogin
    };
}

export default UseNavbar;