// Form data type
export interface LeadFormData {
  fullName: string
  email: string
  phone: string
  region: string
  userType: 'seller' | 'valuation' | 'buyer'
  gymSize: 'small' | 'medium' | 'large'
  notes?: string
  privacyAccepted: boolean
}

// API Response type
export interface ApiResponse {
  success: boolean
  message: string
  data?: any
  error?: string
}

// Social proof card type
export interface SocialProofCard {
  icon: string
  number: string
  description: string
}

// Process step type
export interface ProcessStep {
  badge: string
  title: string
  description: string
}

// FAQ item type
export interface FAQItem {
  question: string
  answer: string
}

