export const PROFILE: string = 'local';

export const API_SERVER: string | null =
  PROFILE === 'local' ? 'https://localhost:4000/' : null;
