import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generation-effect'

const TextEffect : React.FC<{words : string}> = ({words}) => {
  return (
    <TextGenerateEffect words={words} />
  )
}

export default TextEffect