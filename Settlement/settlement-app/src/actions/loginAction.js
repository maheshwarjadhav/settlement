//import {loginConstants} from '../constants/DlosConstants';
//import axios from 'axios';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_CREDEN = 'SET_LOGIN_CREDEN';
const SET_ERROR = 'SET_ERROR_LOGIN';
function setLoginSuccess(isLoginSuccess) {
    return {
        type: SET_LOGIN_SUCCESS,
        isLoginSuccess
    };
}
function setError(error) {
    return {
        type: SET_ERROR,
        error
    };
}
function setLoginCredentials(uname,password) {
    return {
        type: SET_LOGIN_CREDEN,
        uname,
        password
    };
}
export function logout(){
    return dispatch => {
        dispatch(setLoginSuccess(false));
        dispatch(setError(""));
        dispatch(setLoginCredentials("",""));
    }
}
function callLoginApi(uname,password){
 	
    return dispatch => {
  			dispatch(setLoginSuccess(true));
    		dispatch(setLoginCredentials(uname,password));
    /*    axios({
            method: 'post',
            url: localUrl.LOCAL_URL+'/adapter/login',
            data: {
                uname:uname,
                password:password,
            }
        }).then(function (response) {
            console.log(response.data.status );
            if (response.data.status === loginConstants.SUCCESS) {
                dispatch(setLoginSuccess(true));
                dispatch(setLoginCredentials(uname,password));
            }else if(response.data.status==="failed"){
                dispatch(setError("Invalid uname & password"));
                dispatch(setLoginSuccess(false));
            }else{
                dispatch(setError(response.data.status));
                dispatch(setLoginSuccess(false));
            }
        }).catch(function (error) {
            dispatch(setError(""+error));
        });*/
    } 
    
    

}
export function login(uname, password) {
    return dispatch => {
     dispatch(callLoginApi(uname,password));
    }
}