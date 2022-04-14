import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import {store} from '../store/store.js';

export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken('auth', { email, password }, 'POST' );
        const body = await resp.json();
        console.log(body);

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch( login({
                uid: body.uid
            }) );
            dispatch( loadDataS(
                body.user
            ) );
            localStorage.setItem('user', JSON.stringify(store.getState().info));
            console.log(store.getState().info);
            console.log(`lo que guarde en storage ${localStorage.getItem('user')}`);
            console.log(`ahora en json: ${JSON.parse(localStorage.getItem('user'))}`)
            window.location.href='/profile';
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        

    }
}

export const startRegister = ( email, password, name ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, name }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            console.log(body.uid);
            dispatch( login({
                uid: body.uid
            }) )
            dispatch( {
                type: types.email,
                payload: body.user.email
            });
            window.location.href='/profile';
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        window.location.href='/register';

    }
}

export const startLogout = () => {
    return ( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout })

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});

export const loadDataS = ( user ) => ({
    type: types.loadData,
    payload: user
});
