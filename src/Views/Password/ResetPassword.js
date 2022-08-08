
import React from "react";
import { useParams } from "react-router-dom";
import { Fragment } from "react";

export const PasswordReset =()=>{
    const [validUrl,setValidUrl]=React.useState(false)
    const[password,setPassword]=React.useState("")
    const [msg,setMsg]=React.useState("");
    const[error,setError]=React.useState("");
    const param=useParams()
    const url= `http://locolhost:3000/api/v1/user/resetPassword/${param.id}/${param.token}`
    React.useEffect(()=>{

        const verifyUrl=async ()=>{
            try{
                await axios.get(url)
                setValidUrl(true)
            }
            catch(error){
                setValidUrl(false)
            }
        } 
        verifyUrl()
    },[param,url])

    const handleSubmit= async(e)=>{
        e.preventDefault()
        try{
            const{data}= await axios.put(url,{password})
            setMsg(data.message)
            setError("")

        }catch(error){
            if(
                error.response &&
            error.response.status >=400 &&
            error.response.status <=500
            ){
                setError(error.response.data.message)
                setMsg("")
            }
        }
    }
    return(
        <Fragment>
            {validUrl ?(
                <div className='resetpassword-container'>
                <form className='resetpassword-form' onSubmit={handleSubmit}>
                    <h2>Add a new password</h2>
                    <input
                    type="email"
                    placeholder="Enter a new password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    />
                    {error && <div className='styles.error-msg'>{error}</div>}
                   {msg && <div className='styles.success-msg'>{msg}</div>}
                    <button type='submit' className='forgotpassword-btn'>Submit</button>
                </form>
            </div>
            ):(
                <h1>404 Not Found</h1>
            )}
        </Fragment>
    )
}