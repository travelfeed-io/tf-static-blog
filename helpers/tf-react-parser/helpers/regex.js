export const exitUrl = /^\/exit\?url=(.*)$/i;
export const instagramPost = /(?:http[s]?:\/\/)?(?:www.)?instagram\.com\/p\/(.*)\//gi;
export const mentionUrl = /^(?:https:\/\/(?:travelfeed\.io|steemit\.com|busy\.org|steempeak\.com|partiko\.app)|)\/@([a-z0-9-]{3,16})$/i;
export const postUrl = /https:\/\/(?:travelfeed\.io|steemit\.com|busy\.org|steempeak\.com|partiko\.app)(?:\/|\/[a-z0-9-]{1,30}\/)@([a-z0-9-]{3,16})\/([a-z0-9-]*)/i;
