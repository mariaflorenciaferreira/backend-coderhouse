export default class ChatsDto {
    constructor({ date, mail, msg}) {
        this.date = date
        this.mail = mail
        this.msg = msg
    }
}

    export function asDto(chats) {
        if (Array.isArray(chats)) return chats.map((c) => new ChatsDto(c));
        else return new ChatsDto(chats);
}
