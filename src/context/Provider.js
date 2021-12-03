import React, { useMemo, useRef, useState } from 'react'
import { Context } from './Context'

export default function Provider({ children }) {
  const [background, setBackground] = useState("white")
  const [brushRadius, setBrushRadius] = useState(1)
  const [brushColor, setBrushColor] = useState("")
  const canvasRef = useRef(null)

  const changeBackground = (b) => {
    setBackground(b.hex)
  }
  const handleClear = () => {
    canvasRef.current.clear()
  }
  const handleUndo = () => {
    canvasRef.current.undo()
  }
  const buttonColorSelected = (color) => {
    setBrushColor(color)
  }
  const changeBrushColor = (color) => {
    setBrushColor(color.hex)
  }
  const buttonBrushRadius = (radius) => {
    setBrushRadius(radius)
  }

  const buttonEraser = () => {
    setBrushColor("white")
    setBrushRadius(50)
  }
  const buttonPincel = () => {
    setBrushRadius(0.5)
    setBrushColor("black")
  }


  const value = useMemo(() => {
    return ({ background, changeBackground, canvasRef, handleClear, handleUndo, buttonColorSelected, buttonBrushRadius, brushColor, brushRadius, buttonEraser, setBrushColor, buttonPincel, changeBrushColor })
  }, [background, brushColor, brushRadius])

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}
