import React from 'react'
import { VList as RawVList, VListProps } from 'virtua'

const VList = (props: VListProps & { dragDropManager?: unknown }) => {
  const { dragDropManager, ...filtered } = props
  return (
    // cast RawVList to `any` so TS stops checking its props
    <RawVList {...(filtered as any)} dragDropManager={dragDropManager} />
  )
}

export default VList
