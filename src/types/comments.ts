export interface CommentsTotals {
    numThreads: number;
    numComments: number;
}

export interface CommentsMeta {
    totals: CommentsTotals;
    count: number;
    offset: number;
    order: { [key: string]: string }[];
    myHthreadsFlagsHash: any;
    myHthreadsVotesHash: any;
}

export interface Comment {
    id: number;
    identifier: string;
    isDeleted: boolean;
    hentaiVideoId: number;
    isFirst: boolean;
    originalPosterUserId: number;
    upvotes: number;
    downvotes: number;
    numReplies: number;
    numFlags: number;
    attachments: any[] | null;
    emojis: any[] | null;
    extra: any | null;
    msg: string;
    createdAtUnix: number;
    updatedAtUnix: number;
}

export interface CommentUserChannel {
    id: number;
    userId: number;
    themeColor: string | null;
    title: string;
    description: string | null;
    websiteUrl: string | null;
    location: string | null;
    socialMedia: string | null;
    createdAt: string;
    updatedAt: string;
    slug: string;
    views: number;
    introVideos: any | null;
    bannerUrl: string | null;
}

export interface CommentUser {
    id: number;
    name: string;
    number: string;
    slug: string;
    avatarUrl: string;
    effectiveAvatarUrl: string;
    discordUserId: number | null;
    discordUsername: string | null;
    discordAvatarUrl: string | null;
    userChannel: CommentUserChannel | null;
}

/**
 * Hentai comments
 */
export interface Comments {
    meta: CommentsMeta;
    data: Comment[];
}
