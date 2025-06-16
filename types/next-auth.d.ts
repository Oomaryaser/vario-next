import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    role: 'ADMIN' | 'CUSTOMER';
  }

  interface Session {
    user: {
      role: 'ADMIN' | 'CUSTOMER';
    } & DefaultSession['user'];
  }
}
