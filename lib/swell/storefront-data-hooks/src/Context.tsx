import React from 'react'
import { Cart } from './types'

interface ContextShape {
  swell: any
  client: any | null
  cart: Cart | null
  setCart: React.Dispatch<React.SetStateAction<Cart | null>>
  domain: string
  storefrontAccessToken: string
}

export const Context = React.createContext<ContextShape>({
  swell: null,
  client: null,
  cart: null,
  domain: '',
  storefrontAccessToken: '',
  setCart: () => {
    throw Error('You forgot to wrap this in a Provider object')
  },
})