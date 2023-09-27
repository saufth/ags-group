import ContactForm from '@/components/forms/ContactForm'
import { Balancer } from 'react-wrap-balancer'

export default function Contact () {
  return (
    <>
      <section className='max-w-4xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-8 md:space-y-12'>
        <div>
          <Balancer as='h2'>
            <span className='text-h2'>
              Ponte en contacto con nosostros
            </span>
          </Balancer>
        </div>
        <ContactForm />
      </section>
    </>
  )
}
