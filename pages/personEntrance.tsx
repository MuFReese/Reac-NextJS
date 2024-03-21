import MainLoyout from "@/components/MainLoyout/MainLoyout";
import classes from '../styles/main.module.scss'
import Link from "next/link";
import Router from "next/router";
import { useEffect } from "react";
import { NewData } from "./form";

export default function Authorization() {

  async function load() {
    const nick: any = document.getElementById('nick')
    const password: any = document.getElementById('password')
    const json = await fetch('/api/formData')
    const data = await json.json()
    const person = data.persons.filter( (user: NewData) => user.name === nick.value)
    console.log(person[0].name )
    if (person[0].name && person[0].password === password.value) {
      console.log('helo')
      Router.push(`/personEntrance/${person[0].id}`)
    }
  }

  // async function authorization() {
    // const nick: any = document.getElementById('nick')
    // const password: any = document.getElementById('password')
    // const dataJson = await fetch('/api/formData')
    // const persons = await dataJson.json()

  //   if(data.filter((user: any) => user.name === nick.value) && data.filter((user: any) => user.password === password.value)){
  //     Router.push(`/api/formData/}`)
  //   }
  // }

  return (
    <MainLoyout title="Вход">
      <div className={classes.fon}></div>
      <h1 className={classes.title} style={{textAlign: 'center', paddingRight: '40px', position: 'relative'}}>Вход</h1>
      <div className={classes.entrance}>
        <input type="text" placeholder="Введите ник" id="nick"/>
        <input type="password" placeholder="Введите пароль" id="password"/>
        <div>
          <button onClick={load}>Вход</button>
          <Link className={classes.link} href={'/form'}>Регистрация</Link>
        </div>
      </div>
    </MainLoyout>
  )
}

// Authorization.getInitialProps = async () => {

//   const response = await fetch(`/api/formData`)
//   const persons: any = await response.json()

//   return {
//     Authorization: persons
//   }
// }