import { Tokens } from 'src/common';
import { AuthPayLoad } from '../dto';

export interface AuthController {
  profile(user: any): any;
  signIn(body: AuthPayLoad): Promise<Tokens>;
  signUp(body: AuthPayLoad): Promise<Tokens>;
  signOut(sessionId: string): Promise<void>;
  forgotPassword(): Promise<string>;
  resetPassword(): Promise<string>;
  refreshToken(userId: string, sessionId: string): Promise<Tokens>;
}
