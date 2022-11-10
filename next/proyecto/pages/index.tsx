import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Seba Web Dev Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

<section id='presentation'>


   <h1 className={styles.title}>
          Hi, my name is 
         
        </h1>
      <h2 className={styles.name}>Sebastian.<br></br>
      <span className={styles.sub}>I build things for web.</span>
      </h2>
     
        <p className={styles.description}>
         I'm a frontend software developer with a strong passion for building responsive and performant web applications<br></br> with great user experiences that positively impacts the world.<br></br>
         Currently, I'm focused on building web applications with Nextjs. 
        </p>

      <h2 className={styles.title}>01. <span>About Me</span></h2>
      <p className={styles.description}>Hello! My name is Sebastian Benitez and I'm from Uruguay. I really enjoy creating things that live on the internet. My interest in web development starts in 2020 with the pandemic of Covid-19. From there i started learning a lot of things about FrontEnd, like Html5, Css ,Javscript, React, Nextjs and Git, but I'm always learning new things!<br></br>I worked in some projects like <a href='https://www.padeltop.es/'>Padel Top </a>and <a href='http://www.aulapadel.com/'>Aula padel </a> , which are webs about a club and academy of Padel. <br></br>Here are a few technologies I've been working with recently: </p>
     <ul className={styles.ul}>
       <li className={styles.li}>NextJs</li>
     <li className={styles.li}>React</li>
     <li className={styles.li}>Javascript</li>
     <li className={styles.li}>Tailwind CSS</li>
     <li className={styles.li}>Html5</li>
     </ul>
    
     </section>

     <section id='projects'>
      
     
     <h2 className={styles.title}>02. <span>Some Things I've Built</span></h2>

      <main className={styles.main}>
      
        
     
          
          <div className={styles.card}>
            <h2 className={styles.name2}>Cars Uruguay</h2>
            <p className={styles.description2}>This project show cars from a database<br></br>
            Stack used: Nextjs And Supabase</p>
           <a href='https://carsuruguay.vercel.app'> 
            
           <Image className={styles.img}
      
      src="/carsuruguay.png"
      alt="CarsUruguay"
      width={300}
      height={300}
    />
            
            </a> 
    <a className={styles.a} href='https://github.com/Niatse/Galeria-Imagenes'>Github Repository</a>
          </div>

          <div className={styles.card}>
            <h2 className={styles.name2}>Rick And Morty API</h2>
            <p className={styles.description2}>This page shows the characters from Rick and Morty. Stack used: Nextjs And Supabase
           </p>
           <a href='https://rickmortyapiniatse.netlify.app'> 
            
           <Image className={styles.img}
      
      src="/rickandmorty.png"
      alt="Rick and Morty"
      width={300}
      height={300}
    />
            
            </a> 
    <a className={styles.a} href='https://github.com/Niatse/Uso-de-api-Rick-and-Morty'>Github Repository</a>
          </div>

          <div className={styles.card}>
            <h2 className={styles.name2}>Coin Niatse</h2>
            <p className={styles.description2}>This project show the top 100 cryptos<br></br>
            Stack used: Html5 Javascript & Css</p>
           <a href='https://coiniatse.netlify.app'> 
            
           <Image className={styles.img}
      
      src="/cripto.png"
      alt="Cripto"
      width={300}
      height={300}
    />
            
            </a> 
    <a className={styles.a} href='https://github.com/Niatse/CoinNiatse-Prod'>Github Repository</a>
          </div>
         
         
      </main>
      </section>
      <section id='contact'>

      <h2 className={styles.title}>03. <span>What's Next?</span></h2>
          <h2 className={styles.name}>Get In Touch</h2>
          <p className={styles.description}>I'm currently looking for new and interesting projects,my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          

      <a className={styles.email} href='malito:gameerseba@gmail.com'>Contact me</a>
      <footer className={styles.footer}>
        
          Powered by Seba Web Dev
         
        
      </footer>
      </section>
    </div>
    
  )
}
