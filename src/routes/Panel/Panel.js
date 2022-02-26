import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Text from 'components/Text'
import Row from 'components/Row'
import Header from 'components/Header'
import Column from 'components/Column'

import { useMediaQuery } from 'hooks'

const actionsTypeLanguages = {
  departure: { ptbr: 'Embarque', enus: 'Departures' },
  arrival: { ptbr: 'Chegadas', enus: 'Arrivals' }
}
const flightTypeLanguages = {
  domestic: { ptbr: 'Doméstico', enus: 'Domestic' },
  international: { ptbr: 'Internacionais', enus: 'International' }
}

const actionTTL = 5000 // 5 segundos

const heartBeat = functionToRun => {
  return setInterval(() => {
    functionToRun()
  }, actionTTL)
}

const renderDepartureType = (actionType, flightType) => {
  return (
    <Column textAlign='center'>
      <Text fontWeight={500} lineHeight='20px'>
        {actionsTypeLanguages[actionType].ptbr} {flightTypeLanguages[flightType].ptbr}
      </Text>
      <Text fontWeight={300} lineHeight='20px'>
        {flightTypeLanguages[flightType].enus} {actionsTypeLanguages[actionType].enus}
      </Text>
    </Column>
  )
}

const Panel = () => {
  const [actionType, setActionType] = useState('departure')
  const [flightType, setFlightType] = useState('domestic')
  const [intervalId, setIntervalId] = useState(null)
  const isMobile = useMediaQuery('(max-width: 600px)')

  const handleHeartBeat = () => {
    if (actionType === 'departure') {
      setActionType('arrival')
    } else {
      setActionType('departure')
    }

    if (flightType === 'international') {
      setFlightType('domestic')
    } else {
      setFlightType('international')
    }
  }

  useEffect(() => {
    clearInterval(intervalId)
    const intervalo = heartBeat(handleHeartBeat)
    setIntervalId(intervalo)
  }, [actionType])

  return (
    <Column>
      <Header>
        {isMobile ? (
          renderDepartureType(actionType, flightType)
        ) : (
          <>
            {renderDepartureType(actionType, 'domestic')}
            {renderDepartureType(actionType, 'international')}
          </>
        )}
      </Header>
    </Column>
  )
}

export default Panel
