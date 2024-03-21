import {  useState } from 'react'
import classes from './personMain.module.css'
let NOTES:any = []
import image from '../../../image/label.jpeg'
import { NextPageContext } from 'next'



export default function PersonMain({children}: any) {
  const [info, setInfo] = useState([])
  const [id, setId] = useState(0)
  const [show, setShow] = useState(false)
  const [showfoto, setShowFoto] = useState(false)
  const [download, setDownload] = useState(false)
  const [img, setImg]:any = useState(image)

  async function dowlandFoto() {
    const foto: any = document.getElementById('foto')
    if(foto.value.length === 0) {
      return
    }
    console.log(foto.value)
    setImg(foto.value)
  }

  function openDownload() {
    setDownload(true)
  }

  function closeDownload() {
    setDownload(false)
  }

  function openFoto() {
    setShowFoto(true)
    console.log(img)
  }

  function closeFoto() {
    setShowFoto(false)
  }

  function over() {
    setShow(true)
  }

  function out() {
    setShow(false)
  }

  function addInfo() {
    const information: any = document.getElementById('information')

    if( information.value.length === 0) {
      return
    }
    console.log(information.value)
    const notes = {
      idNote: id,
      noteInfo: information.value
    }
    
    NOTES.unshift(notes)
    setId(id => id += 1)
    setInfo(NOTES)
    information.value = ''
  }

  return(
    <>
      <div className={showfoto || download ? classes.eventFon : ''}></div>
      <main className={classes.main}>
        <section className={showfoto ? classes.fotoOpen : classes.display}>
          <img src={img.src} className={classes.fotoOpenImage} />
          <button className={classes.fotoOpenButton} onClick={closeFoto}></button>
        </section>
        <section className={download ? classes.fotoDowland : classes.display}>
          <button className={classes.fotoOpenButton} onClick={closeDownload}></button>
          <h3>Загрузка новой фотографии</h3>
          <hr />
          <p>Вы можете загрузить изображение в формате JPG, GIF или PNG.</p>
          <div className={classes.buttonAndInput}>
            <button className={classes.form} onClick={dowlandFoto}>Загрузить</button>
            <input className={classes.form} type="file" accept="image/png,image/jpeg,image/gif"  id='foto'/>
          </div>
          <hr />
          <p>Если у вас возникают проблемы с загрузкой, попробуйте выбрать фотографию меньшего размера.</p>
        </section>
        <section style={{position: 'relative'}}>
          <div className={classes.wrapperSection}></div>
          <div className={classes.wrapperBaseInfo}>
            <div className={classes.wrapperFoto} onMouseOut={out} onMouseOver={over}>
              <img src={img.src} className={classes.fotoBase} />
              <section className={show ? classes.wrapperFotoButton : classes.display}>
                <button onClick={openFoto}>Открыть</button>
                <button onClick={openDownload}>Загрузить</button>
              </section>
            </div>
            <h2 className={classes.name}>{children}</h2>
          </div>
        </section>
        <section style={{position: 'relative'}}>
          <div className={classes.wrapperSection}></div>
          <div className={classes.wrapperInfo}>
            <textarea placeholder='Что у вас нового?' id="information" ></textarea> 
            <button onClick={addInfo}>Опубликовать</button>
            <ul id='listInfo' className={classes.ulInfo}>
              {info.map( (note: any) => <li key={note.idNote}>{note.noteInfo}</li>)}
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

// PersonMain.getInitialProps = async (ctx: NextPageContext) => {
//   const response = await fetch(`http://localhost:3000/api/formData`)
//   const post = await response.json()
//   const person = post.persons[parseInt(ctx.query.id)]
//   console.log(ctx.query.id)
//   return {
//     person
//   }
// }
