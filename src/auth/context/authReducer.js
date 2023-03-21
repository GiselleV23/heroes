import { types } from "../types/types";

export const authReducer = (state = {} , action) => {

    switch(action.type){
        case types.login: //cuando tengamos una accion que tenga el login, aqui ya deben estar autenticados
            return {
                ...state,
                logged: true,
                user: action.payload,
            };

        case types.logout:
            return {
                logged: false,
                // name: null, se puede poner en null o borrar la propiedad name ya que no va a existir en nuestro state
            };

        default:
            return state; //sino recibimos ningua accion podemos recibir o retornar  el state

    }

}