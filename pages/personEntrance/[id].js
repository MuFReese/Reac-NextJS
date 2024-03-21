import PersonHeader from "@/components/PagePerson/PersonHeader/PersonHeader"
import PersonMain from "@/components/PagePerson/PersonMain/PersonMain.tsx"
import { PersonNavigation } from "@/components/PagePerson/PersonNavigation/PersonNavigation"
import Head from 'next/head'

export default function Person({person}) {

  return(
    <>
      <Head>
        <title>| Next Course</title>
        <meta name="keywords" content="next, JS, React, TS"/>
        <meta name="descrioption" content="next Project"/>
        <meta charSet="utf-8"/>
      </Head>
    <PersonHeader/>
    <div style={{display: 'flex'}}>
      <PersonNavigation/>
      <PersonMain>{person.name} {person.lastName}</PersonMain>
    </div>
    </>
  )
}

Person.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:3000/api/formData`)
  const post = await response.json()
  const person = post.persons[parseInt(ctx.query.id)]
  return {
    person
  }
}
