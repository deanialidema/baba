'use client'

import ReCAPTCHA from 'react-google-recaptcha'

interface RecaptchaProps {
  onVerify: (token: string | null) => void
}

export default function Recaptcha({ onVerify }: RecaptchaProps) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY

  if (!siteKey) {
    console.warn('Missing reCAPTCHA site key')
    return null
  }

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onVerify}
    />
  )
}
