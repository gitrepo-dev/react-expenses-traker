
export type expensesData = {
    uuid: string;
    name: string;
    ex_type: string;
    amount: string
};

export interface expensesStateType {
    defaultStates: {
        isLoading: boolean;
        message: string;
        success: boolean;
        action: string;
    },
    data: expensesData[] | []
};

export interface expensesActionType {
    type: string;
    payload: expensesData;
};