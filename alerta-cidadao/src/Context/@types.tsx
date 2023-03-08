export interface IChildrenProps {
    children: React.ReactNode;
}
export interface IUser {
    id: number | null | undefined;
    email: string;
    name: string;
    cidade?: string;
    estado?: string;
}
export interface IReport {
    title: string;
    description: string;
    name: string;
    img?: string;
    date: string;
    problem?: string;
    since?: string;
    email?: string;
    userId: number | undefined | null;
    id: number;
}

export interface IComment {
    body: string;
    id: number;
    reportId: number;
    userId: number;
}

export interface ILoginFormData {
    email: string;
    password: string;
}

export interface IRegisterFormData {
    name: string;
    password: string;
    confirmPassword: string;
    email: string;
    cidade?: string;
    estado?: string;
}

export interface ICommentFormData {
    body: string;
    reportId: string;
    userId: number | null;
}
