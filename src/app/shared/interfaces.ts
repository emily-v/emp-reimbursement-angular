export interface IExpense {
    expId: number;
    submitDate: string;
    transDate: string;
    empId: number;
    expType: number;
    amount: number;
    merchant: string;
    status: number;
    resolveDate: string;
}

export interface IUser {
    empId: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: number;
}