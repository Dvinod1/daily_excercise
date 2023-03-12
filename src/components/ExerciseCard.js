import React from 'react'
import { Link } from 'react-router-dom'
import { Button ,  Typography } from '@mui/material'

const ExerciseCard = ({exercises}) => {
   
  return (
    <Link  className="exercise-card" to={`/exercise/${exercises.id}`}>
      < img src={exercises.gifUrl} alt={exercises.name} loading="lazy" />
      <Button sx={{ml:'21px', color:'#fff' , backgroundColor:'#ffa9a9' ,fontSize:'14px' , borderRadius:"20px" ,textDecorationLine:'none', textTransform:"capitalize"}}>
        {exercises.bodyPart}
      </Button>
      <Button sx={{ml:'21px', color:'#fff' , backgroundColor:'#fcc757' ,fontSize:'14px' , borderRadius:"20px" ,textDecorationLine:'none', textTransform:"capitalize"}}>
        {exercises.target}
      </Button>
      <Typography ml="22px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="24px">
        {exercises.name}
      </Typography>
    </Link>
  )
}

export default ExerciseCard
