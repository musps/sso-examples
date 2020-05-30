export class VariableMissingError extends Error {
  constructor(message = '') {
    super(...params)
    this.name = 'VariableMissingError'
    this.message = `The variable ${message} must be set!`
  }
}
