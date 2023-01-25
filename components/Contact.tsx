import { PhoneIcon, MailIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import em from '../utils/emailKey'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  async function AlertDismissible(words: string, error?: boolean) {
    if (!error) {
      toast.success(words, {
        position: 'top-right',
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.error(words, {
        position: 'top-right',
        autoClose: 1400,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }
  const submit = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    if (name && email && message) {
      const serviceId = em.SERVICE_ID
      const templateId = em.TEMPLATE_ID
      const userId = em.USER_ID
      const templateParams = {
        name,
        email,
        message,
      }

      emailjs
        .send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          setName('')
          setEmail('')
          setMessage('')
          setEmailSent(true)
          setIsLoading(false)
          AlertDismissible('Sent!')
        })
        .catch((error) => {
          setIsLoading(false)
          AlertDismissible(
            'Something went wrong, Refresh page and try again',
            true
          )
        })
    } else {
      setIsLoading(false)
      AlertDismissible('Please fill in all fields.', true)
    }
  }
  interface ClassContext {
    success: string
    error: string
    info: string
    warning: string
    default: string
    dark: string
  }
  const contextClass: ClassContext = {
    success: 'bg-blue-600',
    error: 'bg-red-600',
    info: 'bg-gray-600',
    warning: 'bg-orange-400',
    default: 'bg-indigo-600',
    dark: 'bg-white-600 font-gray-300',
  }

  return (
    <div id="contact" className="scroll-m-16 scroll-p-6 pb-20">
      <ToastContainer
        toastClassName={(e) =>
          contextClass[e?.type || 'default'] +
          ' relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer'
        }
        bodyClassName={() => 'text-sm font-white font-med block p-3'}
        position="bottom-left"
        autoClose={3000}
      />
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
          <form onSubmit={submit}>
            <div className="mb-10 min-h-[80px] rounded-lg bg-slate-900  px-4 opacity-90 shadow-lg">
              <input
                type="text"
                className="h-[78px] w-full bg-transparent text-lg font-bold text-white outline-none"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="min-h-[80px] rounded-lg bg-slate-900  px-4 opacity-90 shadow-lg">
              <input
                type="text"
                className="h-[78px] w-full bg-transparent text-lg font-bold text-white outline-none"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              id=""
              rows={10}
              className="mt-10 resize-none rounded-lg bg-slate-900 px-4 py-2 text-lg font-bold text-white opacity-90 shadow-lg outline-none md:w-[400px]"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <br />
            <button
              type="submit"
              className="rounded px-7 py-4 text-white shadow-sm transition-all duration-500 hover:scale-110 hover:opacity-80"
              style={{
                background:
                  'radial-gradient( circle, rgba(16, 24, 45, 1) 0%,rgba(44, 74, 145, 1) 100%)',
              }}
            >
              {isLoading ? 'Submitting...' : 'SUBMIT'}
            </button>
          </form>
          <span className={emailSent ? 'visible' : 'hidden'}>Sent!</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
