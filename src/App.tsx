import { useState } from 'react'
import StarRating from './components/StarRating'
import './App.css'

function App() {
  const [rating, setRating] = useState<null | number>(null)

  return (
    <StarRating rating={rating} setRating={setRating} maxStars={5} />
  )
}

export default App
