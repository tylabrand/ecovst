export interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface Service {
  title: string;
  icon: JSX.Element;
  description: string;
  items: string[];
}

export interface Product {
  name: string;
  description: string;
  image: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface NavLink {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    name: string;
    href: string;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}