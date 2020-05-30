import nextConnect from 'next-connect'
import passport, { allowedTypes } from '../../lib/passport'

// [GET /?type={allowedType}]
export default nextConnect()
  .use(passport.initialize())
  .get((req, res) => {
    const type = req.query?.type

    if (!type || !allowedTypes.includes(type)) {
      return res.end('undefined type')
    }

    return passport.authenticate(type)(req, res)
  })
