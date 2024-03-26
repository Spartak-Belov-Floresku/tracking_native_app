import AsyncStorage from '@react-native-async-storage/async-storage';

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'addError':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage: '', token: action.payload}
        case 'signout':
            return {token: null, errorMessage: ''}
        case 'clearErrMsg':
            return {...state, errorMessage: ''}
        default:
            return state;
    }
}

const trySignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'signin', payload: token});
        navigate('TrackList');
    }else{
        navigate('loginFlow');
    }
}

const clearErrMsg = dispatch => () => {
    dispatch({type: 'clearErrMsg'})
}

const signup = dispatch => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    }catch(err){
        dispatch({type: 'addError', payload: 'Something went wrong with sign up!'});
    }
}

const signin = dispatch => async ({email, password}) => {
    try{
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    }catch(err){
        dispatch({type: 'addError', payload: 'Something went wrong with sign in!'});
    }
}


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'signout'});
    navigate('loginFlow');
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrMsg, trySignIn},
    {token: null, errorMessage: ''}
)