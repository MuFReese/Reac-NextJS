import Head from "next/head"
import Link from "next/link"
import classes from './mainLoyout.module.css'

interface MainLoyoutType{
  title: string
  children: any
}

export default function MainLoyout({ children, title}: MainLoyoutType) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content="next, JS, React, TS"/>
        <meta name="descrioption" content="next Project"/>
        <meta charSet="utf-8"/>
      </Head>
      <nav className={classes.navigation}>
        <Link className={classes.navigationLink} href={'/'}>Информация</Link>
        <Link className={classes.navigationLink} href={'/form'}>Регистрация</Link>
        <Link className={classes.navigationLink} href={'/personEntrance'}>Вход</Link>
      </nav>
      <main className={classes.main}>
        {children}
      </main>
    </>
  )
}