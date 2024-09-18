import { DefaultResponse } from './default';
import { PartialHentai } from './hentai';

export interface Transcode {
    source: string;
    videoType: string;
    height: number;
    url: string | null;
    fileFormatExtension: string;
    filesizeMbs: number;
}

export interface Downloads extends DefaultResponse {
    hentaiVideo: PartialHentai;
    transcodes: Transcode[];
}
