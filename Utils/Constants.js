module.exports.opCode = {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    PRESENCE_UPDATE: 3,
    VOICE_STATE_UPDATE: 4,
    RESUME: 6,
    RECONNECT: 7,
    RESUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11,
}

module.exports.properties = {
    $os: "windows",
    $browser: "discord-ws",
    $device: "discord-ws",
}

module.exports.intents = {
    GUILDS: 1 << 0,

    GUILD_MEMBERS: 1 << 1,

    GUILD_BANS: 1 << 2,

    GUILD_EMOJIS_AND_STICKERS: 1 << 3,

    GUILD_INTEGRATIONS: 1 << 4,

    GUILD_WEBHOOKS: 1 << 5,

    GUILD_INVITES: 1 << 6,

    GUILD_VOICE_STATES: 1 << 7,

    GUILD_PRESENCES: 1 << 8,

    GUILD_MESSAGES: 1 << 9,

    GUILD_MESSAGE_REACTIONS: 1 << 10,

    GUILD_MESSAGE_TYPING: 1 << 11,

    DIRECT_MESSAGES: 1 << 12,

    DIRECT_MESSAGE_REACTIONS: 1 << 13,

    DIRECT_MESSAGE_TYPING: 1 << 14,

    MESSAGE_CONTENT: 1 << 15,

    GUILD_SCHEDULED_EVENTS: 1 << 16,

    AUTO_MODERATION_CONFIGURATION: 1 << 20,

    AUTO_MODERATION_EXECUTION: 1 << 21,
}