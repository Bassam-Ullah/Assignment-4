export interface User {
  id: string;
  firstName: string;
  middleName?: string | undefined;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  address: string;
}
