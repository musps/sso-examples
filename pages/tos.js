import { useRouter } from 'next/router'
import {
  Divider,
  Column,
  Button,
  Stack,
  Row,
  Box,
  Heading,
  Text,
  Avatar,
  TextField,
  Badge,
} from 'gestalt'
import { useUser } from '../lib/hooks'
import Layout from '../components/layout'

const Home = () => {
  const user = useUser()
  const router = useRouter()
  const { error } = router.query

  return (
    <Layout>
      <Heading>
        Terms of Service
      </Heading>
      <p>
        No data is stored in our server.
      </p>
    </Layout>
  )
}

export default Home
