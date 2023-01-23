import React from 'react'
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
function Contact() {
  return (
    <div id="contact" className="scroll-m-16 scroll-p-6 pb-20">
      <div className="my-20 flex  w-full items-center justify-center px-4">
        {' '}
        <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
        <h1 className="prose-lg xs:text-4xl prose text-2xl font-bold text-primary md:text-6xl">
          Get in Touch
        </h1>{' '}
        <hr className="mx-5 w-24 rounded-md border-t-4 border-secondary" />
      </div>
      <div className="my-10">
        <div className="mx-auto flex w-[30%] flex-wrap items-center justify-between gap-3">
          <div className="bg flex min-h-[100px] flex-col items-center rounded-lg px-4 shadow-lg">
            <PhoneIcon className="my-3 h-10 w-10 text-white" />
            <p className="text-white">+2349130860401</p>
          </div>
          <div className="bg flex min-h-[100px] flex-col items-center rounded-lg px-4 shadow-lg">
            <MailIcon className="my-3 h-10 w-10 text-white" />
            <span className="text-white">Jejeniyi7@gmail.com</span>
          </div>
        </div>
      </div>

      <div>
        <div className="bg mx-auto flex w-[90%] justify-center rounded-2xl py-20 lg:w-[50%]">
          <form>
            <div className="min-h-[80px] rounded-lg bg-slate-900  px-4 opacity-90 shadow-lg">
              <input
                type="text"
                className="h-[78px] w-full bg-transparent text-lg font-bold text-white outline-none"
                placeholder="Email"
              />
            </div>
            <textarea
              id=""
              rows={10}
              className="mt-10 resize-none rounded-lg bg-slate-900 px-4 py-2 text-lg font-bold text-white opacity-90 shadow-lg outline-none md:w-[400px]"
              placeholder="Message"
            ></textarea>
            <br />
            <br />
            <button
              type="button"
              className="rounded px-7 py-4 text-white shadow-sm transition-all duration-500 hover:scale-110 hover:opacity-80"
              style={{
                background:
                  'radial-gradient( circle, rgba(16, 24, 45, 1) 0%,rgba(44, 74, 145, 1) 100%)',
              }}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
