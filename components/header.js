import { Button, Tabs } from 'gestalt'
import { useRouter } from 'next/router'
import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()
  const router = useRouter()
  const openLogin = (provider) => {
    const path = `/api/login?type=${provider}`
    router.push(path)
  }

  return (
    <header>
      <nav>
        {user && (
          <ul>
            <li>
              <Button
                text="Logout"
                inline
                onClick={() => router.push('/api/logout')}
              />
            </li>
          </ul>
        )}

        {!user && (
          <ul>
            <li>
              <Button
                text="Login with Github"
                inline
                onClick={() => openLogin('github')}
              />
            </li>
            <li>
              <Button
                text="Login with Facebook"
                inline
                onClick={() => openLogin('facebook')}
              />
            </li>
            <li>
              <Button
                text="Login with Google"
                inline
                onClick={() => openLogin('google')}
              />
            </li>
          </ul>
        )}
      </nav>
      <style jsx>{`
        header {
          background-color: #333;
          padding: 10px;
        }

        ul {
          display: flex;
          margin: 0;
        }

        li {
          margin: 10px;
        }
      `}</style>
    </header>
  )
}

export default Header
