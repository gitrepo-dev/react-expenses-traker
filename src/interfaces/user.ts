export type users = {
    uuid?: string;
    name?: string,
    email: string,
    password: string
}


export interface userStateType {
    defaultStates: {
        isLoading: boolean;
        message: string;
        success: boolean;
    },
    data: users | {}
};


export interface userAction {
    type: string;
    payload: users;
}