export interface RequestDemoModal {
  title: string
  onClose?: () => void
}

export interface RequestDemoForm {
  title: string
  email: string
  reason: string
}