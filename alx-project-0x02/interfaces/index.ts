
export interface NavLink {
  label: string;
  href: string;
}

export interface HeaderProps {
  title: string;
  links: { href: string; label: string }[];
}


export interface CardProps {
  title: string;
  content: string;

}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (content: string) => void;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  type?: "button" | "submit" | "reset";
}

export interface PostProps {
  userId: number;
  title: string;
  content: string;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
