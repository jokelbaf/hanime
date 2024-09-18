export interface Achievement {
    id: number;
    userId: number;
    title: string;
    iconUrl: string;
    grantedByUserId: number;
    notes: string | null;
    createdAt: string;
    updatedAt: string;
}
