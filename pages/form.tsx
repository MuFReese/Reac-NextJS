import MainLoyout from "@/components/MainLoyout/MainLoyout";
import classes from '../styles/main.module.scss'
import ChangeImage from "@/components/ChangeImage/ChangeImage";

export interface NewData {
  id: string | number
  name: string
  lastName: string
  mail: string
  password: string
}

export default function Form() {
  let idPerson = 1

  async function buttonClicked() {
    const inputName: any = document.getElementById('name')
    const inputLastName: any = document.getElementById('lastName')
    const inputMail: any = document.getElementById('mail')
    const inputPassword: any = document.getElementById('password')

    const newData: NewData = {
      id: idPerson++,
      name: inputName.value,
      lastName: inputLastName.value,
      mail: inputMail.value,
      password: inputPassword.value
    }

    await fetch('/api/formData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
    inputName.value = ''
    inputLastName.value = ''
    inputMail.value = ''
    inputPassword.value = ''
  }

  return (
    <MainLoyout title="Форма">
      <div style={{display: 'flex'}}>
        <div className={classes.form}>
          <h1 className={classes.title}>Регистрация</h1>
          <input className="input" type="text" placeholder="Введите имя" id="name"/>
          <input className="input" type="text" placeholder="Введите фамилию" id="lastName"/>
          <input className="input" type="text" placeholder="Введите почту" id="mail"/>
          <input className="input" type="password" placeholder="Введите номер" id="password"/>
          <button onClick={buttonClicked}>Отправить</button>
        </div>
        <ChangeImage/>
      </div>
    </MainLoyout>
  )
}