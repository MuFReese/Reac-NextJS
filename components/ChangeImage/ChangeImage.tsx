import classes from './changeImage.module.scss'
import { changeImage } from '../data.js'
import { useEffect, useState } from 'react'


export default function ChangeImage() {
  const [interval, getIntetval] = useState(0)
  const [clear, setClear] = useState(true)

  useEffect(() => {

    const time = setInterval(() => {
      if (clear) {
        if (interval === 0) {
          console.log(interval)
          getIntetval(interval => interval += 1)
        } else {
          getIntetval(0)
          console.log(interval)
        }
      }
    }, 5000)
    
    return () => clearInterval(time);
  })

  function buttonClicked() {
    if (clear) {
      setClear(!clear)
    }

    if (interval === 0) {
      console.log(interval)
      getIntetval(interval => interval += 1)
    } else {
      getIntetval(0)
      console.log(interval)
    }
    
  }

  return(
    <section className={classes.changeImage}>
      <label>
        <h2 className={interval === 0 ? classes.label1 : classes.label2}>{changeImage[interval].label}</h2>
        <p className={interval === 0 ? classes.text1 : classes.text2}>{changeImage[interval].text}</p>
      </label>
      <div className={interval === 0 ? classes.trapezoid1 : classes.trapezoid2}></div>
      <button onClick={buttonClicked}>Переключить</button>
      <img className={interval === 0 ? classes.image1 : classes.image2} src={changeImage[interval].img.src} alt="" />
    </section>
  )
}