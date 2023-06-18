import { useEffect } from 'react'
import { Header } from '../federated-components/Header'

import axios from 'axios'

export default function Home() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/api/hello')

      console.log(response)
    }

    getData()
  }, [])


  return (
    <Header />    
  )
}
