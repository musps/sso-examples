import passport from 'passport'
import { gitHubStrategy, gitHubStrategyType } from './passport/passport-github'
import {
  facebookStrategy,
  facebookStrategyType,
} from './passport/passport-facebook'
import { googleStrategy, googleStrategyType } from './passport/passport-google'

export const allowedTypes = [
  gitHubStrategyType,
  facebookStrategyType,
  googleStrategyType,
]

export const authenticate = (method, req, res) =>
  new Promise((resolve, reject) => {
    const options = {
      session: false,
    }

    passport.authenticate(method, options, (error, token) => {
      if (error) {
        reject(error.message)
      } else {
        if (!token) {
          reject('token not found')
        } else {
          resolve(token)
        }
      }
    })(req, res)
  })

passport.use(gitHubStrategy)
passport.use(facebookStrategy)
passport.use(googleStrategy)

export default passport
