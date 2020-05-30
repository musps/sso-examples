import FacebookStrategy from 'passport-facebook'
import basePath from './../base-path'
import { VariableMissingError } from './exceptions'

if (!process.env.FACEBOOK_CLIENT_ID) {
  throw new VariableMissingError('FACEBOOK_CLIENT_ID')
}

if (!process.env.FACEBOOK_CLIENT_SECRET) {
  throw new VariableMissingError('FACEBOOK_CLIENT_ID')
}

export const facebookStrategyType = 'facebook'

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

export const facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: basePath(`/api/login-callback?type=${facebookStrategyType}`),
    profileFields: ['id', 'displayName', 'photos', 'email'],
    scope: ['email'],
  },
  function (accessToken, refreshToken, profile, cb) {
    const user = parseData(profile, accessToken)
    return cb(null, user)
  }
)
