'use client'

import Typewriter from "typewriter-effect"

export default function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Associate Software Engineer",
          "Full Stack Developer",
          "Competitive Programmer",
          "AI/ML Enthusiast",
          "Cloud Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

