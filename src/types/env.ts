export interface MobileApps {
    buildNumber: number;
    codeName: string;
    semver: string;
    md5: string;
    url: string;
}

export interface AppEnv {
    vhtvVersion: string;
    premiumCoinCost: number;
    mobileApps: MobileApps;
}
