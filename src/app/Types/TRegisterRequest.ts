export type TRegisterRequest = {
  email: string;
  password: string;
  userName: string;
  role: ('Manager' | 'Tester' | 'Developer')[]; //Union Type
};
