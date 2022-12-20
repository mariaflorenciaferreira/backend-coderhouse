
export default class UsersDto {
  constructor({ username, email, password,isAdmin}) {
    this.username = username
    this.email = email
    this.password = password
    this.isAdmin=isAdmin
  }
}

export function asDto(user) {
  if (Array.isArray(user)) return user.map((u) => new UsersDto(u));
  else return new UsersDto(user);
}

