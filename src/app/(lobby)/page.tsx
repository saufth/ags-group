import { Button } from '@/components/ui/Button'
import Video from '@/components/Video'
import { Balancer } from 'react-wrap-balancer'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { Icons } from '@/components/Icons'

const services = [
  {
    heading: 'Marketing',
    description: 'Las herramientas y equipo industrial cumplen con estándares de calidad y durabilidad para soportar el uso intensivo en el entorno de construcción. Ofrecemos una amplia gama de herramientas manuales, equipos eléctricos y mecánicos, máquinas especializadas, y dispositivos de precisión que son esenciales para diversas aplicaciones industriales. ',
    Icon: () => <Icons.Marketing className='w-full h-auto fill-primary' />
  },
  {
    heading: 'Branding',
    description: 'Ponemos a su servicio la renta de torno CNC, fresadora, prensa hidráulica, máquina de inyección de plástico, cizalla industrial, caldera industrial, equipo de soldadura, grúa, máquina de embalaje, máquina de impresión industrial, compresores y generadores de energía. Garantizamos el óptimo funcionamiento de nuestro equipo industrial con los mejores resultados.',
    Icon: () => <Icons.Branding className='w-11/12 h-auto fill-primary' />
  },
  {
    heading: 'Consultoría en ventas',
    description: 'Trajes de Protección diseñados para proteger contra riesgos químicos, biológicos, radiológicos o nucleares (CBRN), cascos de protección, protección auditiva, guantes y gafas de seguridad, máscaras faciales, equipos de protección personal para soldadura, mantas y cortinas ignífugas, equipo de lluvia, etc.',
    Icon: () => <Icons.SalesConsulting className='w-full h-auto fill-primary' />
  },
  {
    heading: 'Consultoría de negocios',
    description: 'Nos enfocamos en la prevención, diagnóstico y corrección de problemas técnicos, con el objetivo de maximizar la disponibilidad de los activos industriales y prolongar su vida útil.',
    Icon: () => <Icons.MarketStudy className='w-full h-auto fill-primary' />
  },
  {
    heading: 'Estudio de mercado',
    description: 'Ofrecemos una selección completa de materiales de construcción esenciales, como cemento, mortero, varillas de refuerzo, mallas metálicas y otros productos necesarios para proyectos de construcción y remodelación.',
    Icon: () => <Icons.BusinessConsulting className='w-full h-auto fill-primary' />
  },
  {
    heading: 'Investigación y análisis de datos',
    description: 'Proporcionamos a los profesionales de la construcción las herramientas y equipos necesarios para llevar a cabo proyectos de construcción de manera exitosa, garantizando la eficiencia, seguridad y calidad en cada tarea.',
    Icon: () => <Icons.ProjectManagement className='w-full h-auto fill-primary' />
  },
  {
    heading: 'Desarrollo y gestión de proyectos',
    description: 'Ponemos a su disposición maquinaria pesada como tornos, fresadoras, prensas hidráulicas, máquinas de inyección de plástico, cortadoras láser, máquinas de soldadura y más, utilizadas en procesos de fabricación y producción.',
    Icon: () => <Icons.DataAnalisys className='w-full h-auto fill-primary' />
  }
] as const

export default function Home () {
  return (
    <>
      <section className='max-w-7xl mx-auto relative z-20'>
        <div className='h-xl px-4 md:px-6 mx-auto pt-16 sm:pt-32 relative'>
          <div className='flex flex-col items-start sm:items-start gap-y-6'>
            <div className='font-primary space-y-6'>
              <Balancer as='h1' className='leading-[1.15] text-[42px] sm:text-6xl font-semibold sm:leading-none'>
                {siteConfig.description}
              </Balancer>
              <Balancer as='p' className='text-sm sm:text-lg font-medium md:pr-32'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magni reprehenderit error, quo nulla quia asperiores doloremque iste.
              </Balancer>
            </div>
            <Button className='mt-2 sm:mt-4 font-medium' color='primary' size='lg'>
              Contáctanos
            </Button>
          </div>
        </div>
        <Video />
      </section>
      <section className='max-w-7xl mx-auto pb-12 lg:pb-24 px-4 sm:px-6 space-y-8 md:space-y-16'>
        <div className='max-w-3xl mx-auto space-y-3 sm:space-y-4 text-center'>
          <Balancer as='h2' className='mx-auto'>
            <span className='text-h2'>
              Nuestras soluciones
            </span>
          </Balancer>
          <Balancer as='p' className='text-sm sm:text-base text-muted-foreground'>
            Cada uno de los servicios que ofrecemos desempeña un papel fundamental en el éxito de su empresa, ya que contribuyen a definir
            su identidad, entender a su público, promocionar sus productos o servicios, tomar decisiones informadas y aumentar sus ventas.
          </Balancer>
          <div className='pt-4'>
            <Image
              src='/images/solutions1.webp'
              alt='Nuestras soluciones'
              width={1260}
              height={860}
              className='w-full h-auto rounded-xl block md:hidden'
            />
          </div>
        </div>
        <div className='flex md:gap-x-12 lg:gap-x-24'>
          <div className='w-1/2 h-full hidden md:space-y-48 lg:space-y-24 md:block'>
            <Image
              src='/images/solutions1.webp'
              alt='Nuestras soluciones'
              width={1260}
              height={860}
              className='w-full h-auto rounded-xl'
            />
            <Image
              src='/images/solutions2.webp'
              alt='Nuestras soluciones'
              width={1260}
              height={860}
              className='w-full h-auto rounded-xl'
            />
            <Image
              src='/images/solutions3.webp'
              alt='Nuestras soluciones'
              width={1260}
              height={860}
              className='w-full h-auto rounded-xl'
            />
            <Image
              src='/images/solutions4.webp'
              alt='Nuestras soluciones'
              width={1260}
              height={860}
              className='w-full h-auto rounded-xl'
            />
          </div>
          <div className='md:w-1/2 space-y-12 mt-4 md:mt-0 px-4 md:px-0'>
            {services.map((service, key) => {
              return (
                <article className='flex flex-col items-center md:items-start gap-y-2' key={key}>
                  <div className='w-10 sm:w-12 h-10 sm:h-12 p-2.5 flex justify-center items-center bg-muted rounded-xl'>
                    <service.Icon />
                  </div>
                  <div className='px-2 space-y-2 text-center md:text-left'>
                    <Balancer as='h3' className='text-h3'>
                      {service.heading}
                    </Balancer>
                    <Balancer as='p' className='text-xs sm:text-sm text-muted-foreground'>
                      {service.description}
                    </Balancer>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
        <div className='flex justify-center md:pt-16'>
          <Button className='w-full sm:w-auto mt-2 sm:mt-4 font-medium' color='primary' size='lg'>
            Contáctanos
          </Button>
        </div>
      </section>
    </>
  )
}
