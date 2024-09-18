import { User } from './user';

/**
 * Coins response
 */
export interface CoinsResponse {
    user: User;
    rewardedAmount: number;
}
