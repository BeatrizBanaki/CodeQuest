import { useState, useContext } from 'react'
import { ApiContext } from '../context/ApiContext'

export default function Left() {
  const { text, setText } = useContext(ApiContext)

  return (
    <div className="w-full h-full bg-gradient-orange p-10 text-white">
      <h1 className="title text-3xl font-bold">CodeQuest</h1>
      <p>Lorem ipsum dolor sit amet. Non molestiae porro quo necessitatibus corporis eum debitis doloremque. Quo totam dolor qui galisum iusto et quae impedit ut illo fugit. Et sequi exercitationem in enim placeat est similique distinctio eum officia dicta non magni sunt. </p>
    </div >
  )
}