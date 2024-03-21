import Link from "next/link";
import classes from './personNavigation.module.css'
import { useEffect, useState } from "react";

export function PersonNavigation() {
  const [width, setWidth] = useState(false)

  function buttonClicked() {
    setWidth(!width)
  }
  
  return(
    <nav className={width? classes.navClick : classes.nav}>
      <button onClick={buttonClicked} className={width ? classes.buttonClick : classes.button}><hr className={classes.hr}/><hr className={classes.hr}/><hr className={classes.hr}/></button>
      <Link href={'/personEntrance/0'} className={width ? classes.link : classes.display}>Моя страница</Link>
      <Link href={'/personEntrance/0'} className={width ? classes.link : classes.display}>Новости</Link>
      <Link href={'/personEntrance/0'} className={width ? classes.link : classes.display}>Сообщения</Link>
      <Link href={'/personEntrance/0'} className={width ? classes.link : classes.display}>Фотографии</Link>
    </nav>
  )
}