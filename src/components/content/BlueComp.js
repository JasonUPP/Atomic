import React from 'react'
import { QuieroSerButton } from './QuieroSerButton';
import { BlueHabilities } from './sub/BlueHabilities';
import { BlueTable } from './sub/BlueTable';

export const BlueComp = ({imagenes}) => {
    return (
        <div className="bgcblue">
            <BlueHabilities imagenes = {imagenes} />
            <BlueTable  imagenes = {imagenes} />
            <QuieroSerButton />
      </div>
    )
}
