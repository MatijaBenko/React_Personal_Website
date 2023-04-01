import React from 'react'

type Project = {
  id: number;
  title: string;
  description: string;
  img: string;
}

type ProjectCardProps = {
  item: Project;
}

function ProjectCard({ item }: ProjectCardProps) {
  return (
    <>
      <div className="img-box w-[450px] lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl
      sm:w-[350px]
      xs:w-[250px]
      2xs:w-[150px]">
        <img src={item.img} alt="" className="w-full" />
        <div className="p absolute top-[-100%] left-0 h-full w-full text-center bg-[#b004b0b7] p-4 pt-20
        md:pt-16
        sm:pt-12
        xs:top-[-115%] xs:pt-8
        2xs:top-[-130%] 2xs:pt-2">
          <h1 className="font-bold text-3xl
          xs:text-base
          2xs:text-xs">{item.title}</h1>
          <p className="font-bold
          xs:text-base
          2xs:text-xs">{item.description}</p>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
