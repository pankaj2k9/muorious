import React from 'react'

export default ({ text, config, additionalStyles, link }) => {
  let result = text
  Object.keys(config).map(word => {
    const color = config[word]
    result = result.replace(word, `${link ? `<a href="${link}" style="text-decoration: underline; color: #fff" target="_blank">` : ''}<span style="color: ${color}; ${additionalStyles ? additionalStyles : ''}">${word}</span>${link ? '</a>' : ''}`)
  })
  return <span dangerouslySetInnerHTML={{ __html: result }}/>
}
