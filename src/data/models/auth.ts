import { User } from './user';

export interface Auth {
  errorMessage: string | null;
  loading: boolean;
  token: string;
  user: User | null;
}
