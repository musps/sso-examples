import nextConnect from 'next-connect'
import { encryptSession } from '../../lib/iron'
import { setTokenCookie } from '../../lib/auth-cookies'
import passport, { allowedTypes, authenticate } from '../../lib/passport'

export default nextConnect()
  .use(passport.initialize())
  .get(async (req, res) => {
    try {
      const type = req.query?.type
      if (!type || !allowedTypes.includes(type)) {
        throw new Error('undefined type')
      }

      const data = await authenticate(type, req, res)
      const token = await encryptSession(data)
      setTokenCookie(res, token)

      return res.writeHead(302, { Location: '/' }).end()
    } catch (error) {
      return res
        .writeHead(302, {
          Location: `/?error=${error?.message || 'An error occurred'}`,
        })
        .end()
    }
  })
