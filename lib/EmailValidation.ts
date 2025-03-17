'use server'
import { EndingResponse } from '@/types/Response'
import axios from 'axios'

const { MAILBOXLAYER_API_KEY } = process.env

export const isEmailExist = async (email: string) => {
  try {
    const response = await axios.get('http://apilayer.net/api/check', {
      params: {
        access_key: MAILBOXLAYER_API_KEY,
        email: email,
        smtp: 1,
      },
    })

    console.log("API Response in Production:", response.data);

    const { smtp_check, mx_found, catch_all, disposable } = response.data
    if (smtp_check && mx_found && !catch_all && !disposable) {
      return true
    }

    return false
  } catch (error) {
    console.error("API Request Error:", error);
    return {
      success: false,
      message: 'Validating email address error' + error,
    } as EndingResponse
  }
}
