export {};
declare module 'express-session' {
    interface SessionData {
        user: {
            id: string;
            pw: string;
        };
    }
}
