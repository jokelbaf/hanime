import { UserData } from './user';

export interface Playlist {
    id: number;
    userId: number;
    visibility: string;
    title: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    isMutable: boolean;
    count: number;
    posterUrl: string | null;
    hentaiVideoSlug: string[] | null;
    views: number;
    totalDuration: number;
    totalSize: number;
    customPosterUrl: string | null;
}

export interface PlaylistVideo {
    id: number;
    playlistId: number;
    hentaiVideoId: number;
    sequence: number;
}

export interface LikeDislikePlaylistVideo extends PlaylistVideo {
    isLike: boolean;
}

export interface SimilarPlaylistsData {
    playlists: Playlist[];
    usersData: { [key: string]: UserData };
}
