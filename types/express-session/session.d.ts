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
        interface User {
            id: string;
            pw: string;
        }
    }
}
