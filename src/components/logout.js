import React from 'react'


const Logout=() =>{
    
    const logoutfetch = async () => {
      try {
        const res = await fetch("/logout", {
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

