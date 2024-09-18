import { Achievement } from './achievements';
import { DefaultResponse } from './default';
import { Playlist } from './playlist';
import { User } from './user';

export interface Channel {
    id: number;
    userId: number;
    themeColor: string | null;
    title: string;
    description: string;
    websiteUrl: string | null;
    location: string | null;
    socialMedia: string | null;
    createdAt: string;
    updatedAt: string;
    slug: string;
    views: number;
    introVideos: any | null;
    bannerUrl: string;
}

export interface MyChannelResponse extends DefaultResponse {
    linkCode: string;
    userChannel: Channel;
    userAchievements: Achievement[];
}

export interface ChannelResponse extends DefaultResponse {
    userChannel: Channel;
    userChannelUser: User;
    userChannelUserAchievements: Achievement[];
    userChannelPlaylists: Playlist[];
}
