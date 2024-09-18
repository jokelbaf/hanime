import { PartialHentaiTag } from './hentai';

export interface SearchTag extends PartialHentaiTag {
    count: number;
    isActive: boolean;
}

export interface SearchBrand {
    id: number;
    title: string;
    slug: string;
    websiteUrl: string | null;
    logoUrl: string | null;
    email: string | null;
    count: number;
    text: string;
    isActive: boolean;
}

export interface UserSearchOptions {
    orderBy: string;
    ordering: string;
    tagsMatch: string;
    id: number;
    userId: number;
    tags: SearchTag[];
    brands: SearchBrand[];
    blacklistedTags: SearchTag[];
}
