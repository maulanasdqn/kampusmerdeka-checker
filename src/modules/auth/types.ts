export type TLoginResponse = {
  data: {
    access_token: string;
    expire_at: string;
    refresh_token: string;
  };
};

export type TLoginParams = {
  email: string;
  password: string;
};
