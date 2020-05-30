import { getSession } from '../../lib/iron'

export default async function user(req, res) {
  const session = await getSession(req)

  if (!session) {
    return res.status(401).json({
      error: 'Access denied',
    })
  }

  return res.status(200).json({
    user: session,
  })
}
