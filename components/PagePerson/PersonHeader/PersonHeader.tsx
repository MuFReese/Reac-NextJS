import { useEffect, useState } from 'react'
import classes from './personHeader.module.css'


export default function PersonHeader() {
  const [name, setName] = useState('')
  const [users, setUsers]:any = useState([])

  function handler(event: any) {
    setName(event.target.value)
    const value = event.target.value.toLowerCase()
    if(value === '') {
      load()
    } else {
      setUsers(users.filter( (user: any) => (`${user.name} ${user.lastName}`).toLowerCase().includes(value)))
    }
  }

  function deleteLoad() {
    setUsers([])
  }

  async function load() {
    const json = await fetch('/api/formData')
    const obj = await json.json()
    setUsers(obj.persons)
  }



  return(
    <header className={classes.header}>
      <div className={classes.labelAndText}>
        <div className={classes.label}></div>
        <h1>Label</h1>
      </div>
      <div style={{position: 'relative'}}>
        <i className={classes.icon}></i>
        <section style={{position: 'relative'}}>
         <input onFocus={load} onBlur={deleteLoad} value={name} onChange={handler} type="search" id='filter' placeholder='поиск'/>
         <ul id='list' className={classes.ulSearch}>
          {users.map((user: any) => <li key={user.id}>{user.name} {user.lastName}</li>)}
         </ul> 
        </section>
      </div>
    </header>
  )
}