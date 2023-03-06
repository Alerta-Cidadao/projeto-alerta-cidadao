export interface IChildrenProps {
    children: React.ReactNode;
  }
export interface IUser {
    name: string;
    url: string;
  }
export interface IReport {
    title: string;
    description: string;
    img: string;
    date: string;
    problem: string;
    since: string;
    email: string;
    userId: number;
    id: number;
  }
export interface ILoginFormData {
    email: string;
    password: string;
  }
export interface IRegisterFormData {
    user: string;
    password: string;
    email: string;
    cidade?: string;
    estado?: string;
  }