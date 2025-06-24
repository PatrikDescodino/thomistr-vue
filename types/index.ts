export interface Service {
  id: string
  name: string
  description: string
  price: number
  duration: number // in minutes
  popular?: boolean
}

export interface ContactInfo {
  address: {
    street: string
    city: string
    postalCode: string
  }
  phone: string
  email: string
  openingHours: {
    [key: string]: string
  }
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  subject?: string
  message: string
}

export interface NavigationItem {
  name: string
  href: string
  current?: boolean
}

export interface FAQ {
  question: string
  answer: string
}
