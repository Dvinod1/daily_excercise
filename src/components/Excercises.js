import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { ExerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';



const Excercises = ({ exercises, bodyPart, setExercises }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9
  const IndexOfLastExercise = currentPage* exercisesPerPage
  const indexOfFirstExercise = IndexOfLastExercise - exercisesPerPage

  const currentExercises = exercises.slice(indexOfFirstExercise , IndexOfLastExercise)
  

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 2800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async ()=> {
      let exercisesData = [] ;

      if (bodyPart === 'all'){
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions);

      } else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExerciseOptions);

      }

      setExercises(exercisesData)
    }
    
     fetchExercisesData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bodyPart])
  

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results {bodyPart}
      </Typography>
      <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center' >
        {currentExercises.map((exercises, index) => (
          < ExerciseCard key={index} exercises={exercises} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination color='standard' shape='rounded'
            defaultPage={1} count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage} onChange={paginate} size="large" />
        )}

      </Stack>
    </Box>
  )
}

export default Excercises
