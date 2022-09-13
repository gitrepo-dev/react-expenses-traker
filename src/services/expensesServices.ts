import { expensesData } from "interfaces/expenses";

/**
 * get all expenses
 * @param {''}
 * @returns {promise}
 */

export const getExpensesService = async (): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/get/expenses`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'GET',
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * add expenses
 * @param {'uuid name ex_type amount'}
 * @returns {promise}
 */

export const addExpensesService = async (data: expensesData): Promise<object> => {
    const { name, uuid, amount, ex_type } = data
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/add/expenses`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                name,
                uuid,
                ex_type,
                amount: Number(amount),
            }),
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};


/**
 * delete expenses
 * @param {'uuid'}
 * @returns {promise}
 */

 export const deleteExpensesService = async (uuid: string): Promise<object> => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_ROUTE}/delete/expenses/${uuid}`, {
            headers: {
                'x-api-key': `${process.env.REACT_APP_API_KEY}`,
                'content-Type': 'application/json'
            },
            method: 'DELETE',
        });
        return await res.json()
    } catch (e) {
        throw e
    }
};