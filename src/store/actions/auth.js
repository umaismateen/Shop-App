import axios from 'axios';

import * as actionTypes from './actionTypes';
import webApiKey from '../../Keys/WebApiKey';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (token, userId) => {
    console.log("token2",token);
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};
export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};
export const checkAuthTimeout = (expirationTime) => {
    console.log(expirationTime);
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime*1000)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart())
        const authData = {
            email, password, returnSecureToken: true,
        }
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${webApiKey}`;
        if (!isSignup) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webApiKey}`;
        }
        axios.post(url, authData)
            .then(response=> {
                const expirationTime = new Date(new Date().getTime() + response.data.expiresIn * 1000)
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('expirationTime', expirationTime)
                localStorage.setItem('userId', response.data.localId);
                console.log("auth",response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn))
            }).catch(err => {
                console.log(err);
                dispatch(authFail(err.response.data.error));
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        console.log("token",token);
        if (!token) {
            dispatch(logout());
        } else {
            const expirationTime = new Date(localStorage.getItem('expirationTime'));
            if (expirationTime > new Date()) {
                const userId = localStorage.getItem('userId');
                const presentTime = new Date().getTime();
                const time = (expirationTime.getTime() - presentTime) / 1000;
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeout(time));
            } else {
                dispatch(logout());
            }
        }
    }
}