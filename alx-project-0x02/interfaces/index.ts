
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

