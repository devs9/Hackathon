import React from 'react'
import HeaderBlock from '../atom/Header'
import { rootLogoSrc } from '../../constants'

export const Header = () => (
  <HeaderBlock>
    <img className="logo" src={rootLogoSrc} alt="chuck logo" />
  </HeaderBlock>
)
