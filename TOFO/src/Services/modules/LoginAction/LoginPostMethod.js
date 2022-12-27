// import { api } from '../../api';
// import { ChangeUrl, ForgotUrl, LoginUrl,SignUpUrl } from '../../../Containers/Utility/Url';

// export const LoginPostMethod = api.injectEndpoints({
//     reducerPath: 'LogInPostMethod',
//     endpoints: (builder) => ({
//         CreatePost: builder.mutation({
//             query: (grantType) => {

//                 }
//             }
//         })
//     })
// })
export const{useCreatePostMutation}=LoginPostMethod
//                 console.log(grantType)
//                 return {
//                     url: LoginUrl,
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': '*/*',
//                     },
//                     body: JSON.stringify(grantType),

//                 }
//             }
//         }),
//         SignUpPost:builder.mutation({
//             query:(postType)=>{            
//                 console.log(postType)
//                 return{
//                     url:SignUpUrl,
//                     method:'POST',
//                     headers:{
//                         'Content-Type':'application/json',
//                         'Accept':'*/*',
//                     },
//                     body:JSON.stringify(postType),

//                 }
//             }
//         }),
//         ForgotPost:builder.mutation({
//             query:(forgotType)=>{            
//                 console.log(forgotType)
//                 return{
//                     url:ForgotUrl,
//                     method:'POST',
//                     headers:{
//                         'Content-Type':'application/json',
//                         'Accept':'*/*',
//                     },
//                     body:JSON.stringify(forgotType),

//                 }
//             }
//         }),
//         ChangePost:builder.mutation({
//             query:(changeType)=>{            
//                 console.log(changeType)
//                 return{
//                     url:ChangeUrl,
//                     method:'POST',
//                     headers:{
//                         'Content-Type':'application/json',
//                         'Accept':'*/*',
//                     },
//                     body:JSON.stringify(changeType),

//                 }
//             }
//         }),


//     }),

// })
// export const { useCreatePostMutation,useSignUpPostMutation,useForgotPostMutation,useChangePostMutation} = LoginPostMethod
