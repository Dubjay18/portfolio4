import React from 'react'

function Skills() {
  return (
    <div className=" projectBg font-poppins bg  flex min-h-[92vh] items-center justify-around">
      <div>
        {' '}
        <div className="my-20 flex  w-full items-center justify-center px-4">
          {' '}
          <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
          <h1 className="prose-lg xs:text-4xl prose text-2xl font-bold text-primary md:text-6xl">
            My Tools
          </h1>{' '}
          <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
        </div>
        <div className="mx-10 my-8 grid grid-col-1 md:grid-cols-2 gap-8 md:pt-10 lg:grid-cols-4 !text-white">
          <div className="neumophic-card flex items-center rounded-md bg-base-200  p-8 shadow-md">
            {' '}
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/office/40/000000/react.png"
            />
            <h2 className="mx-2">React.js</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/fluency/48/000000/node-js.png"
            />
            <h2 className="mx-2">Node.js</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/color/48/000000/nextjs.png"
              alt=""
            />
            <h2 className="mx-2">Next.js</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/color/48/000000/git.png"
            />
            <h2 className="mx-2">Git</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
            />
            <h2 className="mx-2">Github</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
            />
            <h2 className="mx-2">Bootstrap</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img height={40} width={40} src="/tailwind-css.svg" alt="" />
            <h2 className="mx-2">Tailwind CSS</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/color/48/000000/firebase.png"
              alt=""
            />
            <h2 className="mx-2">Firebase</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src=" https://img.icons8.com/color/48/000000/postgreesql.png"
              alt=""
            />
            <h2 className="mx-2">Postgresql</h2>
          </div>
          <div className="neumophic-card flex items-center rounded-md bg-base-200 p-8 shadow-md">
            <img
              height={40}
              width={40}
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt=""
            />
            <h2 className="mx-2">Mongodb</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
