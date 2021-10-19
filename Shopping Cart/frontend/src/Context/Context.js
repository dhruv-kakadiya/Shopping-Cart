import React, {useContext, useReducer, useEffect} from 'react';
import authReducer from '../Reducer/authReducer';

const AppContext = React.createContext();
const initialUserState = {
    isAuth: false,
    token: null,
    user_id: 0,
    username: "",
};

const AppProvider = ({children}) => {
    const [userInfo, setUserInfo] = useReducer(authReducer, initialUserState);

    const setUser = () => {
        const info = JSON.parse(localStorage.getItem("info"));
        console.log(info);
        setUserInfo({
            type: "SETUSER",
            payload: {
                id: info.id,
                token: info.token,
                username: info.username,
            },
        })
    }

    useEffect(() => {
        if(localStorage.getItem("info")) {
            setUser();
        }
    }, [])

    const value = {
        userInfo,
        setUserInfo,
        setUser,
    }

    return (
        <AppContext.Provider value={value}>
            {children} 
        </AppContext.Provider>
    );
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
