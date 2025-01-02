export interface IUser {
  _id?: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  profilePhoto?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}
export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
  disabled?: boolean;
}
