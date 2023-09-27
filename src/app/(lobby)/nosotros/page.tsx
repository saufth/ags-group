import { Button } from '@/components/ui/Button'
import { Icons } from '@/components/Icons'
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const aboutUs = [
  {
    heading: 'Misión',
    description: 'Nuestra misión es co-crear, junto a ti, un horizonte próspero y sostenible para tu empresa,mediante soluciones innovadoras de consultoría de negocios y marketing.',
    Icon: () => <Icons.Mission className='fill-primary w-10 sm:w-12 h-auto' />,
    image: '/images/mission.webp'
  },
  {
    heading: 'Visión',
    description: 'Aspiramos a ser líderes globales en la consultoría de negocios y marketing, reconocidos por nuestra capacidad para transformar empresas y ayudarlas a prosperar en un entorno empresarial en constante cambio.',
    Icon: () => <Icons.Vision className='fill-primary w-10 sm:w-12 h-auto' />,
    image: '/images/vision.webp'
  }
] as const

const values = [
  {
    heading: 'Innovación',
    description: 'No nos conformamos con lo común. Nos esforzamos por pensar diferente, rompiendo moldes y dando vida a soluciones frescas y eficaces.'
  },
  {
    heading: 'Creatividad',
    description: 'Nuestra pasión reside en el pensamiento original. Cada idea que surge es un reflejo de nuestra dedicación a imaginar lo inimaginable.'
  },
  {
    heading: 'Visión Disruptiva',
    description: 'Más allá de seguir las tendencias, nos esforzamos por ser pioneros. Rompemos las normas cuando es necesario, todo en nombre de una mejora significativa y revolucionaria.'
  },
  {
    heading: 'Mentalidad Abierta',
    description: 'El mundo está en constante cambio, y nosotros estamos listos para adaptarnos. Apreciamos las nuevas perspectivas y las acogemos con brazos abiertos.'
  },
  {
    heading: 'Pensamiento Expansivo',
    description: 'No hay límites para nuestro pensamiento. Nos aventuramos más allá de las fronteras convencionales, siempre buscando ampliar nuestros horizontes.'
  },
  {
    heading: 'Originalidad',
    description: 'Para nosotros, lo ordinario no es suficiente. Nos esforzamos por ser genuinos en todo lo que hacemos, creando soluciones auténticas y sin precedentes.'
  },
  {
    heading: 'Perspectiva Divergente',
    description: 'Sabemos que no existe una única respuesta. Por eso, valoramos la exploración desde diferentes ángulos, asegurando que cada solución sea completa y bien fundamentada.'
  }
] as const

export default function About () {
  return (
    <>
      <section className='max-w-7xl mx-auto relative z-20'>
        <div className='h-xl px-4 md:px-6 mx-auto pt-16 relative'>
          <div className='flex flex-col items-start sm:items-start gap-y-6'>
            <div className='font-primary space-y-6'>
              <Balancer as='h1' className='leading-[1.15] text-[42px] sm:text-6xl font-semibold sm:leading-none'>
                Transformamos visiones en realidades
              </Balancer>
              <Balancer as='p' className='text-sm sm:text-lg font-medium md:pr-32'>
                Tu visión es nuestra misión, y tu éxito, nuestro propósito supremo.
              </Balancer>
            </div>
            <Button className='mt-2 sm:mt-4 font-medium' color='primary' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
        <div className='absolute inset-0 left-auto w-full sm:w-3/5 h-[512px] overflow-hidden flex items-center sm:rounded-xl -z-10'>
          <Image
            className='w-full h-full object-cover relative'
            src='/images/about-hero.webp'
            alt='Acerca de nosotros'
            width={1260}
            height={840}
          />
          <div className='absolute inset-0 bg-black/30 sm:bg-black/10' />
        </div>
      </section>
      <section className='max-w-7xl mx-auto pb-12 lg:pb-24 px-4 sm:px-6 space-y-8 md:space-y-16'>
        <div className='text-center space-y-3 sm:space-y-6'>
          <Balancer as='h2' className='mx-auto'>
            <span className='text-h2'>
              Acerca de nosotros
            </span>
          </Balancer>
          <Balancer as='p' className='text-sm sm:text-base sm:px-16 text-muted-foreground'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, deleniti maiores ut
            porro nesciunt quibusdam, laudantium quos necessitatibus quod veniam, culpa distinctio
            consequuntur modi et praesentium voluptates beatae tenetur eligendi.
          </Balancer>
        </div>
        <div className='space-y-8 md:space-y-12'>
          {aboutUs.map((about, key) => {
            const isPair = key % 2 === 0

            return (
              <article className={cn('flex md:flex-row md:items-center flex-col-reverse gap-y-6', (isPair && 'md:flex-row-reverse'))} key={key}>
                <div className={cn('md:w-1/2 px-2 space-y-3 md:space-y-4 text-center md:text-left', (isPair ? 'md:pl-12 md:pr-4' : 'md:pr-12 md:pl-4'))}>
                  <div className='flex items-center gap-x-2 sm:gap-x-3 justify-center md:justify-start'>
                    <about.Icon />
                    <Balancer as='h3' className='text-h3'>
                      {about.heading}
                    </Balancer>
                  </div>
                  <Balancer as='p' className='text-xs sm:text-sm text-muted-foreground'>
                    {about.description}
                  </Balancer>
                </div>
                <div className='md:w-1/2'>
                  <Image
                    src={about.image}
                    alt={about.heading}
                    width={1260}
                    height={860}
                    className='w-full h-auto rounded-xl'
                  />
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <section className='overflow-hidden relative border-y'>
        <div className='max-w-7xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-12 sm:space-y-16 relative'>
          <div className='text-center space-y-3 sm:space-y-6'>
            <Balancer as='h2' className='mx-auto'>
              <span className='text-h2'>
                Nuestros valores
              </span>
            </Balancer>
            <Balancer as='p' className='text-sm sm:text-base sm:px-16 text-muted-foreground'>
              Nos enorgullece cultivar y vivir nuestros principios fundamentales cada día para transmitirlos
              con nuestros clientes y sumar a su cultura organizacional.
            </Balancer>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-16 px-4 sm:px-0'>
            {values.map((value, key) => (
              <div className='flex flex-col items-center gap-y-2 text-center' key={key}>
                <Balancer as='h3' className='text-h3'>
                  {value.heading}
                </Balancer>
                <Balancer as='p' className='text-xs sm:text-sm text-muted-foreground'>
                  {value.description}
                </Balancer>
              </div>
            ))}
          </div>
          <Icons.Logomark className='w-sm sm:w-xl md:w-3xl h-auto absolute -bottom-24 -right-24 md:-right-0 md:-bottom-96 fill-primary opacity-10' />
        </div>
      </section>
      <section>
        <div className='max-w-3xl mx-auto py-12 lg:py-24 px-4 sm:px-6 space-y-4 sm:space-y-6'>
          <div className='text-center space-y-3 sm:space-y-6'>
            <Balancer as='h2' className='mx-auto'>
              <span className='text-h2'>
                Nuestra historia
              </span>
            </Balancer>
          </div>
          <Balancer as='div' className='text-sm sm:text-base text-center text-muted-foreground space-y-4 sm:space-y-6 px-6'>
            <p>
              En un mundo saturado de mensajes y marcas, vimos una oportunidad: ayudar a las empresas a destacarse
              estratégicamente. No solo queríamos que pudieran competir, sino que se diferenciaran drásticamente de
              la competencia . Así comenzó nuestro viaje empresarial.
            </p>
            <p>
              AGS GROUP fue una solución diseñada desde la pasión y el compromiso. Desde nuestros inicios, identificamos
              la necesidad de ofrecer servicios de consultoría y hacerlo con una visión fresca, innovadora y adaptada a
              las singularidades de cada cliente.
            </p>
            <p>
              A lo largo de estos siete años, hemos sido testigos y protagonistas del crecimiento, adaptación y triunfo
              de numerosas empresas. Con cada historia de éxito, nuestra misión se ha reafirmado: ser el apoyo esencial
              que toda empresa necesita para prosperar en un entorno competitivo y cambiante.
            </p>
            <p>
              La trayectoria de AGS GROUP es una de visión, determinación y, sobre todo, la creencia inquebrantable de
              que  juntos podemos construir un futuro empresarial más sólido y prometedor.
            </p>
          </Balancer>
        </div>
      </section>
    </>
  )
}
