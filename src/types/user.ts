export interface User {
    id: number;
    email: string;
    signInCount: number;
    createdAt: string;
    updatedAt: string;
    ip: string;
    name: string;
    slug: string;
    identity: string;
    coins: number;
    lastRewardedAdClickedAt: string | null;
    altSubscriptionPeriodStart: string | null;
    altSubscriptionPeriodEnd: string | null;
    btSubscriptionPlan: string | null;
    btSubscriptionCreatedAt: string | null;
    btSubscriptionEndedAt: string | null;
    btSubscriptionValidUntil: string | null;
    isBtSubscriptionRecurring: boolean;
    videoViews: number;
    videoViewsLength: number;
    number: string;
    discordUserId: number | null;
    discordUsername: string | null;
    discordAvatarUrl: string | null;
    numComments: number;
    upvotes: number;
    downvotes: number;
    trust: number;
    avatarUrl: string;
    isAdmin: boolean;
    currentRoles: string[];
    altPremiumStatus: string;
    btPremiumStatus: string;
    isAbleToAccessPremium: boolean;
    accessLevel: number;
    effectiveAvatarUrl: string;
}

export interface UserSetting {
    id: number;
    userId: number;
    isUsingHtvmobileExternalPlayer: boolean;
    playlistItemDisplayMode: number;
    imagesChannels: any;
    primaryColor: any;
    preferredHeight: number;
}

export interface UserData {
    id: number;
    name: string;
    slug: string;
}
