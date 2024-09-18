// import { DefaultResponse } from './types/app';
// import { AppClient } from './clients/app';
// import { omit } from './modules/utility';

// /**
//  * Decorator to ensure that the app info is available before calling the decorated method.
//  * @param target Target object.
//  * @param propertyKey Property key.
//  * @param descriptor Property descriptor.
//  * @returns New property descriptor.
//  */
// export function EnsureAppInfo(
//     target: AppClient,
//     propertyKey: string | symbol,
//     descriptor: TypedPropertyDescriptor<() => Promise<any>>
// ) {
//     const originalMethod = descriptor.value!;

//     descriptor.value = async function (this: AppClient, ...args: any[]) {
//         if (!this.info) {
// 			const homePage = await this.getHomePage();
// 			this.info = omit(homePage, ['sections']) as DefaultResponse;
//         }
//         return await originalMethod.apply(this);
//     };

//     return descriptor;
// }
