export type UserGender = "male" | "female";

export type User = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: UserGender;
  image: string;
};
