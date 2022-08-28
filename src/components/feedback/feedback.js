import React, {useEffect, useState} from 'react';
import api from "../../../utils/api"

import FeedBack from 'react-feedback-popup';


function Feedback({accomodationId}) {
	const [feedbackItems,setFeedbackItems]=useState([])
const handleSubmit = (values, props) => {
   
   const jwt=localStorage.getItem("jwt")
  api.post('api/v1/accomodation/feedBack/create',{headers:{jwt}},values)
      .then((response) => {
        // if (response.status === 200) {
        //   window.location.replace('/')
		// }
      })
      .catch((err) => {
       console.log(err)
      })
  }


  
   
  
 useEffect(() => {
    const jwt = localStorage.getItem('jwt')
	 api.get(`api/v1/accomodation/${accomodationId}`,{headers:{jwt}})
      .then((response) => {
		console.log(response)
        // if (response.status === 200) {
        //   console.log(response.data.feedback)
		//   setFeedbackItems(response.data.feedback)
		// }
      })
      .catch((err) => {
       console.log(err)
      })
  

}, [accomodationId])

	return (
		<div className="App">
		
			<FeedBack
				style={{zIndex:'2', marginLeft:'20px', position:'fixed'}}
				position="right"
                numberOfStars={5}
				headerText="BAREFOOT NOMAD"
				bodyText={<div>{
					feedbackItems.map(item=>(
				<div>
					{/* <p>{item.userId}</p>  */}
					<span>{item.feedback}</span>
					</div>
					))}
					</div>}
				buttonText="Feedback?"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => {
					console.log(data)
				}
				
    //   api.post('api/v1/accomodation/feedBack/create', {accomodationId,FeedBack
					
    //   }).then((response) => { 
						
	// 				}).then(() => {
	// 					alert('Success!');
	// 				}).catch((error) => {
	// 					alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					// })
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>
	);
}

export default Feedback;