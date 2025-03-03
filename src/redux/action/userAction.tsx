import { USER_REGISTER_REQUEST,
    USER_CLEAR_STATE,
    USER_LOGIN_REQUEST,
    USER_LIST_REQUEST,
    USER_DELETE_REQUEST,
    USER_UPDATE_REQUEST
         } from "../type/userType";
    
    type registerType = {
        email:string,
        password:string,
        name:string,
        mobile:number
    }

    type loginType = {
        email:string,
        password:string
    }
    
    type userType = loginType | registerType



    
        
    
    export const userUpdateRequestAction = (data:userType)=>{
        return {
            type:USER_UPDATE_REQUEST,
            payload:data
        }
    }
    
    export const userRegisterRequest = (data:userType)=>{
        
        return {
            type:USER_REGISTER_REQUEST,
            payload:data
        }
    }
    
    export const userDeleteRequestAction = (id:any)=>{
        return {
            type:USER_DELETE_REQUEST,
            payload:id
        }
    }
    
    export const userClearState = ()=>{
        return {
            type:USER_CLEAR_STATE,
        }
    }
    
    export const userLoginRequest = (data:userType)=>{
        return {
            type:USER_LOGIN_REQUEST,
            payload:data
    
        }
    }
    
    export const userListActionRequest = (data:userType)=>{
      return {
        type:USER_LIST_REQUEST,
        payload:data
      }
    }