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
      <div className="z-10 max-w-[60%] ">
        <Image src={image} className="rounded-md" />
      </div>
      <div className="z-20 -ml-6">
        <div className="mb-4 text-right font-bold">
          <a href={liveLink} className=" text-[#10182d]">
            {name}
          </a>
        </div>
        <div className="rounded bg-[#10182d] p-5 text-white">{desp}</div>
        <div className=" mt-5 flex items-center justify-end">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-circle btn-ghost h-fit w-fit p-4 transition-all duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
