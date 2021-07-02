import EntityUser from 'server/src/entities/user';

export {};
// declare module 'express-session' {
//     interface SessionData {
//         user: {
//             id: string;
//             pw: string;
//         };
//     }
// }
declare global {
    namespace Express {
        type User = EntityUser;
    }
}
