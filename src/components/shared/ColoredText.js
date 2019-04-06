import React from 'react'

export default ({ text, config, additionalStyles }) => {
  let result = text
  Object.keys(config).map(word => {
    const color = config[word]
    result = result.replace(word, `<span style="color: ${color}; ${additionalStyles ? additionalStyles : ''}">${word}</span>`)
  })
  return <span dangerouslySetInnerHTML={{ __html: result }} />
}
