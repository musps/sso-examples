import GoogleStrategy from 'passport-google-oauth20'
import basePath from './../base-path'
import { VariableMissingError } from './exceptions'

if (!process.env.GOOGLE_CLIENT_ID) {
  throw new VariableMissingError('GOOGLE_CLIENT_ID')
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
  throw new VariableMissingError('GOOGLE_CLIENT_SECRET')
}

export const googleStrategyType = 'google'

export const parseData = (profile, accessToken) => {
  return {
    provider: profile.provider,
    providerId: profile.id,
    providerAccessToken: accessToken,
    displayName: profile?.displayName || '',
    email: profile?.emails?.[0]?.value || '',
    photo: profile?.photos?.[0]?.value || '',
  }
}

export const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: basePath(`/api/login-callback?type=${googleStrategyType}`),
    scope: ['profile', 'email'],
  },
  function (accessToken, refreshToken, profile, cb) {
    const user = parseData(profile, accessToken)
    return cb(null, user)
  }
)
