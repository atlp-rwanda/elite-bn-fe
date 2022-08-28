import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import FeedBack from 'react-feedback-popup';
import api from '../../utils/api'
import { Typography } from '@material-ui/core';


const AccomodationDetails = () => {
    const [feedbackItems, setFeedbackItems]=useState([])

    const {id}= useParams()

    const getData=async()=>{
        const jwt = localStorage.getItem('jwt')
        const data= await api.get(`api/v1/accomodation/${id}`,{headers:{jwt}})
        setFeedbackItems(data.data&&data.data.payload&&data.data.payload.Feedbacks?data.data.payload.Feedbacks:[])
    }

const submitFeedback=async(data)=>{
    console.log(data)
          const jwt = localStorage.getItem('jwt')

    const feedbackData={
accomodationId: id,
feedback: data.message
    }
    const ratingData={
  tripRequestId: id,
  serviceRating: data.rating
}
    const submittedFeedback= await api.post('api/v1/accomodation/feedBack/create',feedbackData,{headers:{jwt}})
        const rating= await api.post("api/v1/accomodation/rate",ratingData,{headers:{jwt}})


    console.log(submittedFeedback)
        console.log(rating)

}

    useEffect(() => {
            console.log("Effeeeect taking place")
    getData()
    }, [])


  return (
    <div>
        <FeedBack
				style={{zIndex:'2', marginLeft:'20px', position:'fixed'}}
				position="right"
                numberOfStars={5}
				headerText="BAREFOOT NOMAD"
				bodyText={
                <div>{
					feedbackItems.map(item=>(
				<div style={{marginBottom: '20px'}}>
                    {/* {JSON.stringify(feedbackItems)} */}
					<Typography 
                    variant='p'
                    style={{fontStyle:"italic" }}
                    >{item.userId}</Typography> 
					<Typography>{item.feedback}</Typography>
					</div>
					))}
					</div>
                    }
				buttonText="Feedback?"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => submitFeedback(data)}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
        AccomodationDetails
        </div>
  )
}

export default AccomodationDetails