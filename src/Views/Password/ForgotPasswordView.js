
import React from 'react'

export const ForgotPassword =()=>{
    const[email,setEmail]=React.useState("");
    const [msg,setMsg]=React.useState("");
    const[error,setError]=React.useState("");

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const url="http://localhost:3000/api/v1/user/forgotPassword";
            const {data}=await axios.post(url,{email})
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
    return (
        <div className='forgotpassword-container'>
            <form className='forgotpassword-form' onSubmit={handleSubmit}>
                <h2>Forgot password</h2>
                <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                />
                {error && <div className='styles.error-msg'>{error}</div>}
                {msg && <div className='styles.success-msg'>{msg}</div>}
                <button type='submit' className='forgotpassword-btn'>Submit</button>
            </form>
        </div>
    )
}