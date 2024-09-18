import { UserSetting, User } from './user';
import { UserSearchOptions } from './search';
import { Playlist } from './playlist';
import { AppEnv } from './env';

/**
 * Default response returned in most API requests.
 */
export interface DefaultResponse {
    env: AppEnv;
    user: User;
    userSetting: UserSetting;
    sessionToken: string;
    sessionTokenExpireTimeUnix: number;
    userSearchOption: UserSearchOptions | null;
    playlists: Playlist[];
}
