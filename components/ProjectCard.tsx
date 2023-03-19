import Image from 'next/image'
import React from 'react'
interface IProps {
  image: any
  liveLink: string
  desp: string
  name: string
  index: number
}
function ProjectCard({ image, name, desp, liveLink, index }: IProps) {
  return (
    <div className="flex items-center">
      <div className="z-10 max-w-[60%]">
        <Image src={image} />
      </div>
      <div className="z-20 -ml-6">
        <h1 className="text-right">{name}</h1>
        <div className="rounded bg-slate-600 p-5 text-white">{desp}</div>
      </div>
    </div>
  )
}

export default ProjectCard
