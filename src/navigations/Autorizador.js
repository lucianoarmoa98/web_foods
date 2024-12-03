import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { setToken } from "../redux/actions/action";



export const ProtectedRoutes = () => {
    const stateToken = useSelector(state => state.reducerGlobal.token);
    let dataStorage = localStorage.getItem('dataUser');

    const dispatch = useDispatch();

    //pasar a json y setear en redux
    useEffect(() => {
        if (dataStorage) {
            let data = JSON.parse(dataStorage);
            // console.log("data", stateToken);
            dispatch(setToken(data));
        }
    }, [dataStorage])

    return dataStorage ? (
        <Outlet />
    ) : (
        <Navigate to="/" replace />
    );
};



//-------------------------------------validacion de login y redireccion
export const ProtectedRoutesLogin = () => {
    const stateToken = useSelector(state => state.reducerGlobal.token);

    return stateToken ? (
        <Navigate to="/app/admin" replace />
    ) : (
        <Outlet />
    );
};