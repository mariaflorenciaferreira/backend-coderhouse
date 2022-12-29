
export default class MessagesDto {
  constructor({ username, body}) {
    this.username = username
    this.body = body
  }
}


export function asDto(messages) {
  if (Array.isArray(messages)) return messages.map((m) => new MessagesDto(m));
  else return new MessagesDto(messages);
}

