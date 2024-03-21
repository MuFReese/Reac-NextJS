import type { NextApiRequest, NextApiResponse } from "next";

const data: any = {
  persons: [
    {
      id: 0,
      name: 'Михаил',
      lastName: 'Курносов',
      mail: 'mufreese@gmail.com',
      password: '123'
    },
    {
      id: 1,
      name: 'Николай',
      lastName: 'Абрамов',
      mail: 'mufreese@gmail.com',
      password: '123'
    },
    {
      id: 2,
      name: 'Григорий',
      lastName: 'Курносов',
      mail: 'mufreese@gmail.com',
      password: '123'
    },
    {
      id: 3,
      name: 'Андрей',
      lastName: 'Курносов',
      mail: 'mufreese@gmail.com',
      password: '123'
    }
  ]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const newPerson = {
    ...req.body
  }
  if (newPerson.name && newPerson.lastName && newPerson.mail && newPerson.password) {
    data.persons.push(newPerson)
  } 
  res.status(200).json(data);
}
 