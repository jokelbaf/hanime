import { DefaultResponse } from './default';
import { PartialHentai } from './hentai';

/**
 * Home page section
 */
export interface PageSection {
    title: string;
    data: PartialHentai[];
}

/**
 * Home page response
 */
export interface HomePage extends DefaultResponse {
    sections: PageSection[];
}
