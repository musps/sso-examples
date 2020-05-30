import { removeTokenCookie } from '../../lib/auth-cookies'

export default async function logout(req, res) {
  removeTokenCookie(res)
  return res.writeHead(302, { Location: '/' }).end()
}
