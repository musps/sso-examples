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
        Single Sign On Authentication examples{' '}
        <Badge text={process.env.NEXT_PUBLIC_VERSION} />
      </Heading>

      {error && (
        <Box padding={2}>
          <Button color="red" text={error} type="button" inline />
        </Box>
      )}

      {user && (
        <Box color="white">
          <Box padding={2}>
            <Row gap={1}>
              <Avatar size="md" name={user.displayName} src={user.photo} />
              <Stack>
                <Text weight="bold">{user.displayName}</Text>
                <Text>
                  <Badge text={user.provider} />
                </Text>
              </Stack>
            </Row>
          </Box>
          <Divider />
          <Box padding={2}>
            <TextField
              id="displayName"
              placeholder="Name"
              label="Name"
              value={user.displayName}
              type="text"
            />
          </Box>
          <Box padding={2}>
            <TextField
              id="email"
              placeholder="Email"
              label="Email"
              value={user.email}
              type="email"
            />
          </Box>
        </Box>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </Layout>
  )
}

export default Home
