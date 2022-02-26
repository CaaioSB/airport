import React, { useState, useEffect } from 'react'
import { useTheme } from 'styled-components'

import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from 'components/Text'
import Column from 'components/Column'
import Row from 'components/Row'

import { getHour } from 'helpers'

const Header = ({ showHours, backgroundColor, children }) => {
  const [hour, setHour] = useState(null)
  const theme = useTheme()

  useEffect(() => {
    setHour(getHour())
  }, [])

  setInterval(() => {
    setHour(getHour())
  }, 1000)

  return (
    <Column>
      <Row
        bg={theme.colors[backgroundColor]}
        width='100vw'
        height='50px'
        padding='0 20px'
        display='flex'
        alignItems='center'
        justifyContent='space-around'
      >
        {children}
      </Row>
      {showHours && (
        <Row display='flex' alignItems='center' justifyContent='center' backgroundColor='black' color='white'>
          <Text fontWeight={500}>{hour || <Skeleton />}</Text>
        </Row>
      )}
    </Column>
  )
}

Header.propTypes = {
  showHours: PropTypes.bool,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired
}

Header.defaultProps = {
  showHours: true,
  backgroundColor: 'yellow'
}

export default Header
