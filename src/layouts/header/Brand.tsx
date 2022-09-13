import React from 'react'
import { Logo } from 'assets'

export default function Brand() {
  return (
    <div className="text-lg font-bold">
      <img src={Logo} alt="logo" className="w-10" />
    </div>
  )
}
