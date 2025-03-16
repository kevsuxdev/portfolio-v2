'use server'
import { EndingResponse } from '@/types/Response'
import axios from 'axios'

const { MAILBOXLAYER_API_KEY } = process.env

export const isEmailExist = async (email: string) => {
  try {
    const response = await axios.get('https://apilayer.net/api/check', {
      params: {
        access_key: MAILBOXLAYER_API_KEY,
        email: email,
        smtp: 1,
        format: 1,
      },
    })

    const { smtp_check, mx_found, catch_all, disposable } = response.data

    if (smtp_check && mx_found && !catch_all && !disposable) {
      return true
    }

    return false
  } catch (error) {
    return { success: false, message: 'Validating email address error' + error} as EndingResponse
  }
}
