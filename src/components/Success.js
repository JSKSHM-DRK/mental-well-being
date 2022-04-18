import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

const Success = () => {
  return (
    <Fragment>
      <Typography variant="h3" align="center">
        Results
      </Typography>
      <Typography variant="h4" align="center">
        If you score: 
        </Typography><br/>
      <Typography variant="h6"  align="center">
      40-50 - You most likely are suffering from Depression. Take a break and call a friend ☎️
      </Typography><br/>
      <Typography variant="h6"  align="center">
      30-39 - You are exhibiting some Mental health symptoms. Take a break and do something you enjoy 🙂
      </Typography><br/>
      <Typography variant="h6"  align="center">
      20-29 - You are exhibiting a couple of Mental health symptoms. Keep monitoring your health everyday 📝
      </Typography><br/>
      <Typography variant="h6"  align="center">
      10-19 - You most likely are NOT suffering from any Mental health diseases. Keep doing what you're doing 👍
      </Typography> <hr/>
      <Typography variant="h6"  align="center">
       
       Cure:- Consider watchful waiting, and testing again normally within two weeks. We additionally suggest it
       would be prudent to start a conversation with your doctor.
      </Typography>

      
    </Fragment>
  )
}

export default Success