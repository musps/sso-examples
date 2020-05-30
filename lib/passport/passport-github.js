import GitHubStrategy from 'passport-github'
import basePath from './../base-path'
import { VariableMissingError } from './exceptions'

if (!process.env.GITHUB_CLIENT_ID) {
  throw new VariableMissingError('GITHUB_CLIENT_ID')
}

if (!process.env.GITHUB_CLIENT_SECRET) {
  throw new VariableMissingError('GITHUB_CLIENT_SECRET')
}

export const gitHubStrategyType = 'github'

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

export const gitHubStrategy = new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: basePath(`/api/login-callback?type=${gitHubStrategyType}`),
    scope: ['user:email'],
  },
  function (accessToken, refreshToken, profile, cb) {
    const user = parseData(profile, accessToken)
    return cb(null, user)
  }
)
