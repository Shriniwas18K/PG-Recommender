import React from 'react'
import { TGh1, P0, TGh4 } from '../../../Aliases'

export const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: { xs: '90vw', sm: '60vw' },
    padding: { xs: 10 },
    fontSize: 'large',
    textAlign: 'center'
  },
  h1: {
    fontWeight: 'bold',
    letterSpacing: 10
  },
  h4: {
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    maxWidth: '9cm',
    textAlign: 'center'
  }
}

const data = {
  h1: '404',
  h4: 'Sorry the page you are looking for does not exist'
}

export default function Error() {
  return (
    <P0 sx={styles.base} data-testid="base">
      <P0 sx={styles.main} data-testid="main">
        <TGh1 sx={styles.h1} data-testid="h1">
          {data.h1}
        </TGh1>
        <TGh4 sx={styles.h4} data-testid="h4">
          {data.h4}
        </TGh4>
      </P0>
    </P0>
  )
}
