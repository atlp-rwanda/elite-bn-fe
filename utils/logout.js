
const Logout=() =>{
    
    const logoutfetch = async () => {
      try {
     
const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/logout`,{
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
  
        if (res.status === 401 || !res) {
          window.alert("please logout later");
        } else {
          window.location.reload();
          history.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    };
    userEffect(() => {
      logoutfetch();
    
    }, []);
  
    return (
      <div>
  
      </div>
    ) 
  }
  export default Logout;

