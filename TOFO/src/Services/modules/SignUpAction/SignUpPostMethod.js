// import {api} from '../../api';
// import {SignUpUrl,} from '../../../Containers/Utility/Url';

// export const SignUpPostMethod=api.injectEndpoints({ 
//     reducerPath:'SignUpPostMethod',
//     endpoints:(builder)=>({
//         CreatePost:builder.mutation({
//             query:(grantType)=>{
               
//                 console.log(grantType)
//                 return{
//                     url:SignUpUrl,
//                     method:'POST',
//                     headers:{
//                         'Content-Type':'application/json',
//                         'Accept':'*/*',
//                     },
//                     body:JSON.stringify(grantType),

//                 }
//             }
//         })


//     })
// })
// export const{useSignUpPostMutation}=SignUpPostMethod