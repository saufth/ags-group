'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useRef, FormEvent, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { Textarea } from '../ui/TextArea'

export interface MailerData {
  name: string
  email: string
  message: string
}
const recaptchaSitekey = String(process.env.NEXT_PUBLIC_RECAPTCHA_SITE)

export default function ContactForm () {
  const [modalMessageState, setModalMessageState] = useState<string>('')
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState<boolean>(false)

  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openModal = (message: string) => {
    setModalMessageState(message)
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()
    setIsSendButtonDisabled(false)
  }

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!recaptchaRef.current?.getValue()) {
      openModal('Porfavor, verifica que no eres un robot.')
      return
    }

    const data: MailerData = {
      name: String(event.currentTarget.contactName.value),
      email: String(event.currentTarget.contactEmail.value),
      message: String(event.currentTarget.contactMessage.value)
    }

    setIsSendButtonDisabled(true)
    const response = await fetch('/api/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    response.ok && formRef.current?.reset()

    const { message: responseMessage } = await response.json() as MailerData
    openModal(responseMessage)
  }

  return (
    <>
      <form
        className='space-y-4'
        onSubmit={sendEmail}
        ref={formRef}
      >
        <Input id='contactName' name='contactName' type='text' label='Nombre' min={6} max={128} required />
        <Input id='contactEmail' name='contactEmail' type='email' label='Correo electrónico' min={8} max={128} required />
        <Textarea id='contactMessage' name='contactMessage' placeholder='Cuéntanos acerca de tu proyecto' min={6} max={512} required />
        <div className='flex justify-center' />
        <div className='flex flex-col items-center gap-y-8'>
          <div className='max-w-fit'>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaSitekey}
            />
          </div>
          <Button
            className='w-full sm:w-auto mt-2 sm:mt-4 font-medium'
            size='lg'
            type='submit'
            disabled={isSendButtonDisabled}
          >
            {!recaptchaRef.current?.getValue() ? 'Enviar' : 'Enviando..'}
          </Button>
        </div>
      </form>

      <dialog className='p-5 m-auto space-y-3' ref={dialogRef}>
        <div className='pb-5 text-lg text-stone-500 border-b border-b-stone-300'>
          {modalMessageState}
        </div>
        <Button
          className='w-full sm:w-auto mt-2 sm:mt-4 font-medium'
          size='sm'
          onClick={closeModal}
        >
          Cerrar
        </Button>
      </dialog>
    </>
  )
}
