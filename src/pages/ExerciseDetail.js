import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExercisVideos from '../components/ExercisVideos'

import { ExerciseOptions, fetchData, YoutubeOptions } from '../utils/fetchData'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  // const [targetMuscle, setTargetMuscle] = useState([])
  // const [equipmentExercise, setEquipmentExercise] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, ExerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, YoutubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      // const targetMuscleExerciseData =   await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}` ,ExerciseOptions)
      // setTargetMuscle(targetMuscleExerciseData)

      // const equipmentExerciseData =   await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}` ,ExerciseOptions)
      // setEquipmentExercise(equipmentExerciseData)
    }

    fetchExercisesData()


  }, [id])


  return (
    <Box >
      <Detail exerciseDetail={exerciseDetail} />
      <ExercisVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
    </Box>
  )
}

export default ExerciseDetail
