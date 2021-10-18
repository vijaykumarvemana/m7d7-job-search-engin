
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const Company = () => {
   
   const [data, setJobs] = useState([])

   const fetchJobsData = async () => {
    
    try {
        let response = await fetch("https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10")
        console.log(response)
        if (response.ok) {
            let data = await response.json()
            console.log(data)
            setJobs(data.data)
           
        } else {
            console.log('something went wrong')
        }
    } catch (error) {
        console.log(error)
    }
}
useEffect(() => {
    fetchJobsData()
}, [])

   
    return(
        <>
            {
                data.map( job => 
                  
                    <div>
                    <Card>

                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>
                                {job.company_name}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                )

                   
                   
                
            }
            </> 

    )
}


export default Company