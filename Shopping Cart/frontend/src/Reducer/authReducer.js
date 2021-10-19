const authReducer = (state, action) => {
    if(action.type === "LOGIN") {
        localStorage.setItem("info", JSON.stringify(action.payload));
        return {
            isAuth: true,
            token: action.payload.token,
            user_id: action.payload.id,
            username: action.payload.username,
        }
    }

    if(action.type === "SETUSER") {
        return {
            isAuth: true,
            token: action.payload.token,
            user_id: action.payload.id,
            username: action.payload.username,
        }
    }
    return state;
}

export default authReducer;
