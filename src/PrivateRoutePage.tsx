import { useContext, useEffect, useState } from 'react'
import { useNavigate, Navigate } from "react-router-dom";
import { User } from './Models';
import CurrentUserContext from './Store/userStore';

interface classComponent {
    children: JSX.Element
}

const PrivateRoutePage = (value: classComponent) => {

    const { currentUser, dispatch } = useContext(CurrentUserContext);

    useEffect(() => {
        let dataUserLocalSave: string | null = localStorage.getItem('user');
        if (dataUserLocalSave !== null) {
            let getDataLocal: User = JSON.parse(dataUserLocalSave);
            dispatch(getDataLocal);
        }
    }, [])

    if (currentUser === null) return <Navigate to="/login" replace={true} />;

    return value.children;
}

export default PrivateRoutePage