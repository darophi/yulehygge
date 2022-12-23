import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { Problem } from '../components/problem'
import Problem4Example from '../components/problem4Example'
import Problem4 from '../components/problem4'

const inter = Inter({ subsets: ['latin'] })

const data = [
  {
    description: "Julemanden har glemt hvad koden er til hans slæde. Uden denne er han ikke i stand til at levere julegaver til alle børn i verden. Han husker blot den rækkefølge af tal han skulle gange sammen for at få koden, men hans lommeregner er gået i stykker, så han kan desværre ikke lave regnestykket. Kan i regne ud hvad koden er?",
    problemHeader: "Problem 1",
    solution: "3417",
    point: 5
  },
  {
    description: `
    I har nu været i stand til at hjælpe ham ind i slæden og afsted i luften med hans rensdyr. Nu finder han ud af, at hans GPS ikke virker helt som tiltænkt. Det er nemlig sådan at den korteste rute mellem alle huse han skal forbi, er krypteret og han skal skrive det dekrypteret svar ind for at kunne få adgang til at se de rigtige koordinater. 
    Det vi ved er følgende: 
    
    Givet et stykke tekst, er alle bogstaver flyttet 7 tegn, dvs. bogstav A → H, B → I, C → J, etc. Dette kaldes også for “Caesar Cipher” og er en af de mest simple måder at krypterer og dekryptere beskeder på og er kendt i omtrent 2000 år.`,
    example: [
      "Krypteret:     Zulthuk",
      "Dekrypteret:   Snemand"
    ],
    problem: "Ybkvsm tlk klu yøkl abk",
    problemHeader: "Problem 2",
    solution: "Rudolf med den røde tud",
    point: 5
  },
  {
    description: "Nu er det lykkedes os at dekryptere alle koordinater og nu kan vi komme forbi alle huse og aflevere gaverne. Men det skulle nødig være så nem! For julemanden har nu måske spist lidt for meget i løbet af året, så han kan ikke være i skorstenen og dermed kan han ikke komme ind og ligge gaverne. Han begynder at komme op med en idé på hvordan han hurtigst mulig kan slippe af med de kilo igen! Han ved 1kg Julemandsflæsk skal bruge 2500 Watt for at blive forbrændt. ",
    problemHeader: "Problem 3",
    solution: "50000",
    problem: "Hvis han løber 100m forbrænder han 10 Watt, hvor mange meter skal han løbe for at forbrænde 2kg så han kan komme ind i skorstenen?",
    point: 5
  },
  {
    description: `
    Nu har julemanden endelig lykkedes med at komme til husene, lykkedes med at komme igennem skorstenen og ud igen. Alle gaver er nu afleveret og det har været en lang nat, med lidt for meget motion og stress. GPS’en er løbet tør for strøm så han finder et stykke papir og tegner byerne og afstanden mellem dem som han husker det. For at komme hjem skal han tage den korteste vej (også den hurtigeste vej i det her tilfælde). 
Han kommer frem til følgende. "A" er hvor han er, og "Z" er hans destination.`,
    problemHeader: "Problem 4",
    solution: "28",
    point: 7,
    exampleImage: <Problem4Example />,
    problemImage: <Problem4 />,

    problem: "Find den korteste vej imellem byerne A → Z, brug tallene på pilene som “prisen”. Summen af alle pile skal være så lille som mulig."
  }
]


export default function Home() {



  return (
    <>
      <Head>
        <title>Yulehygge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-4 flex pt-12 flex-col space-y-4'>
        <div className='text-4xl'>Yulehygge</div>
        <div className='text-sm'>Datalogisk inspireret jule problemer</div>
        <div>Hejså! I skal hjælpe julemanden med at levere julegaver til alle og så kom hjem igen. Den som får flest point får en lille gave! </div>
        <div>Point tildeles ved første mølle princip, dvs den hurtigste til at løse opgaven, får point for den!</div>

        <Problem {...data[0]} />
        <Problem {...data[1]} />
        <Problem {...data[2]} />
        <Problem {...data[3]} />

        <div>
          <p className='text-4xl'>Færdig!</p>

          <p>Julemanden takker jer for at sikre at alle får deres gaver og han kan komme hjem til sin julekonen igen!</p>
          <p className='text-2xl pb-40'>Glædelig jul!🎄🎄🎄🎄🎄</p>
        </div>
      </main>
    </>
  )
}
