const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_CREDEN = 'SET_LOGIN_CREDEN';
const SET_ERROR = 'SET_ERROR_LOGIN';
export  function reducerLogin(state = {
    isLoginSuccess: false,
    uname:'',
    password:'',
    error:''
}, action) {
    switch (action.type) {
        case SET_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isLoginSuccess: action.isLoginSuccess
            });
       
        case SET_LOGIN_CREDEN:
            return Object.assign({}, state, {
                uname: action.uname,
                password:action.password
            });
           
        case SET_ERROR:
            return Object.assign({}, state, {
                error: action.error
            });
        default :
        
    }
    return state;
}
