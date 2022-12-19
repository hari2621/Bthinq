import {api} from '../../api';
import {CODE_KEY, Config} from '../../../Config/index';
import { LoginUrl, URL } from '../../../Containers/Utility/Url';

export const LoginPostMethod=api.injectEndpoints({ 
    reducerPath:'LoginPostMethod',
    endpoints:(builder)=>({
        CreatePost:builder.mutation({
            query:(grantType)=>{
               let params={
                "Password": 'Hari@2621',
                "UserName": 'Hari@2622',
               }
                console.log(grantType)
                return{
                    url:LoginUrl,
                    method:'POST',
                    headers:{
                        'Content-Type':'application/json',
                        'Accept':'*/*',
                    },
                    body:params

                }
            }
        })


    })
})
export const{useCreatePostMutation}=LoginPostMethod