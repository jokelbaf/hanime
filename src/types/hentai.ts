import { PlaylistVideo, LikeDislikePlaylistVideo, SimilarPlaylistsData } from './playlist';

/**
 * PartialHentai class
 */
export interface PartialHentai {
    id: number;
    name: string;
    slug: string;
    createdAt: string;
    releasedAt: string;
    views: number;
    interests: number;
    posterUrl: string;
    coverUrl: string;
    isHardSubtitled: boolean;
    brand: string;
    durationInMs: number;
    isCensored: boolean;
    rating: number;
    likes: number;
    dislikes: number;
    downloads: number;
    monthlyRank: number;
    brandId: string;
    isBannedIn: string;
    previewUrl: string | null;
    primaryColor: string | null;
    createdAtUnix: number;
    releasedAtUnix: number;
}

export interface Hentai extends PartialHentai {
    isVisible: boolean;
    description: string;
    hentaiTags: PartialHentaiTag[];
    titles: Title[];
}

export interface PartialHentaiTag {
    id: number;
    text: string;
}

export interface HentaiTag extends PartialHentaiTag {
    count: number;
    description: string;
    wideImageUrl: string;
    tallImageUrl: string;
}

export interface Title {
    lang: string;
    kind: string;
    title: string;
}

export interface VideoStream {
    id: number;
    serverId: number;
    slug: string;
    kind: string;
    extension: string;
    mimeType: string;
    width: number;
    height: number;
    durationInMs: number;
    filesizeMbs: number;
    filename: string;
    url: string;
    isGuestAllowed: boolean;
    isMemberAllowed: boolean;
    isPremiumAllowed: boolean;
    isDownloadable: boolean;
    compatibility: string;
    hvId: number;
    serverSequence: number;
    videoStreamGroupId: string;
    extra2: string | null;
}

export interface VideoServer {
    id: number;
    name: string;
    slug: string;
    naRating: number;
    euRating: number;
    asiaRating: number;
    sequence: number;
    isPermanent: boolean;
    streams: VideoStream[];
}

export interface VideosManifest {
    servers: VideoServer[];
}

export interface HentaiFranchise {
    id: number;
    name: string;
    slug: string;
    title: string;
}

export interface HentaiVideoStoryboard {
    id: number;
    numTotalStoryboards: number;
    sequence: number;
    url: string;
    frameWidth: number;
    frameHeight: number;
    numTotalFrames: number;
    numHorizontalFrames: number;
    numVerticalFrames: number;
}

export interface HentaiVideo {
    nextHentaiVideo: PartialHentai;
    nextRandomHentaiVideo: PartialHentai;
    hentaiVideo: Hentai;
    videosManifest: VideosManifest;
    hentaiTags: HentaiTag[];
    hentaiFranchiseHentaiVideos: PartialHentai[];
    hentaiFranchise: HentaiFranchise;
    hentaiVideoStoryboards: HentaiVideoStoryboard[];
    watchLaterPlaylistHentaiVideos: PlaylistVideo[];
    likeDislikePlaylistHentaiVideos: LikeDislikePlaylistVideo[];
    playlistHentaiVideos: PlaylistVideo[];
    similarPlaylistsData: SimilarPlaylistsData;
}
