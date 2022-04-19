export default class Validator {
  validateUsername(username) {
    return /^([a-zA-Z0-9_\-]*)$/.test(username)
            && !/^[0-9-_]/.test(username)
            && !/[0-9-_]$/.test(username)
            && !/\d{3}/.test(username);
  }
}
