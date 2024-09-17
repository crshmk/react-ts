export type MessageType = 'success' | 'error'

export type MessageContextType = { 
  showMessage: ShowMessageType
  errorMessage: string 
  successMessage: string
}

export type ShowMessageType = (messageType: MessageType, message: string) => void
