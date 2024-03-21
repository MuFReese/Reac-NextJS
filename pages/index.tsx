import MainLoyout from "@/components/MainLoyout/MainLoyout";
import classes from '../styles/main.module.scss'

export default function Index() {

  return (
    <MainLoyout title="Информация">
      <h1 className={classes.title}>Информация</h1>
    </MainLoyout>
  )
}