import { useContext } from 'react'
import { Context } from '../context/Context'
import CanvasDraw from "react-canvas-draw"

export function PaintCanvas() {
  const { background, canvasRef, brushColor, brushRadius } = useContext(Context)

  return (
    <div className="border-4 border-gray-400">
      <CanvasDraw
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight - 100}
        style={{ background: background }}
        ref={canvasRef}
        lazyRadius={0}
        brushRadius={brushRadius}
        brushColor={brushColor}
        hideGrid={true}
        enablePanAndZoom={true}
      />
    </div>
  )
}
