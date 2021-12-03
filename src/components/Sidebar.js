import { ChromePicker } from 'react-color';
import Tippy from '@tippyjs/react';
import { useContext } from "react"
import { Context } from '../context/Context';


export function Sidebar() {
  const { changeBrushColor, brushColor, background, changeBackground, buttonColorSelected, handleClear, handleUndo, buttonBrushRadius, buttonEraser, buttonPincel } = useContext(Context)

  const colors = ["black", "#6B7280", "#763C1D", "#EF4444", "#F59E0B", "#047857", "#3B82F6", "#1E40AF", "#7C3AED", "white", "#D1D5DB", "#B45309", "#EC4899", "#FBBF24", "#FDE68A", "#6EE7B7", "#FBCFE8", "#93C5FD", "#1D4ED8", "#DDD6FE"]
  return (
    <div className="flex justify-center bg-gray-100">

      <div className="border-l border-r border-gray-400 p-3">
        <div className="grid grid-cols-3 gap-x-5 gap-y-3">
          <button onClick={buttonPincel}>
            <img src="./pencilIcon.png" className="w-6 h-6" alt="Icon" />
          </button>
          <button>
            <img src="./bucketIcon.png" className="w-6 h-6" alt="Icon" />
          </button>
          <button>
            <img src="./fontIcon.png" className="w-6 h-6" alt="Icon" />
          </button>
          <button onClick={buttonEraser}>
            <img src="./eraserIcon.png" className="w-6 h-6" alt="Icon" />
          </button>
          <button>
            <img src="./dropperIcon.png" className="w-6 h-6" alt="Icon" />
          </button>
          <button>
            <img src="./searchIcon.png" className="w-6 h-6" alt="Icon" />
          </button>
        </div>
        <h1 className="text-xs text-center font-medium mt-4">Tools</h1>
      </div>

      <div className="border-r border-gray-400 p-3">
        <div className="flex items-center justify-center">
          <button className="border border-gray-500 p-1">
            <img src="./brushIcon.png" className="w-8 h-8" alt="Icon" />
          </button>
        </div>
        <h1 className="text-xs text-center font-medium mt-2">Brushes</h1>
      </div>

      <div className="flex flex-col space-y-3 border-r border-gray-400 p-3">
        <button onClick={() => buttonBrushRadius(1)}>
          <div className="w-32 h-0.5 bg-black"></div>
        </button>
        <button onClick={() => buttonBrushRadius(3)}>
          <div className="w-32 h-1 bg-black"></div>
        </button>
        <button onClick={() => buttonBrushRadius(6)}>
          <div className="w-32 h-2 bg-black"></div>
        </button>
        <button onClick={() => buttonBrushRadius(10)}>
          <div className="w-32 h-3 bg-black"></div>
        </button>
        <h1 className="text-xs text-center font-medium mt-4">Sizes</h1>
      </div>

      <div className="flex space-x-5 border-r border-gray-400 p-3">
        <div className="flex flex-col items-center">
          <Tippy interactive={true} placeholder={"bottom"} delay={100} content={
            <ChromePicker
              color={background}
              onChangeComplete={changeBackground}
            />
          }>
            <button className="p-5 w-2 border border-gray-500" style={{ background: background }} />
          </Tippy>
          <h1 className="text-xs text-center font-medium mt-2 whitespace-wrap w-20">Background Color</h1>
        </div>

        <div>
          <div className="grid grid-cols-10  gap-x-2 gap-y-3">
            {colors.map((c, i) => (
              <button onClick={() => buttonColorSelected(c)} className="border border-gray-500 w-6 h-6" style={{ backgroundColor: c }} key={i}></button>
            ))}
          </div>
          <h1 className="text-xs text-center font-medium mt-4">Colors</h1>
        </div>

        <div className="text-center">
          <Tippy interactive={true} placeholder={"bottom"} delay={100} content={
            <ChromePicker
              color={brushColor}
              onChangeComplete={changeBrushColor}
            />
          }>
            <button className="p-5 border border-gray-500" style={{ background: brushColor }} />
          </Tippy>

          <h1 className="text-xs text-center font-medium mt-4  whitespace-wrap w-14">Custom Color</h1>
        </div>
      </div>

      <div className="flex items-center space-x-5 border-r border-gray-400 p-3">
        <button className="p-2" onClick={handleUndo}>
          <img src="./undoIcon.png" className="w-6 h-6" alt="Icon" />
        </button>
        <button className="p-2" onClick={handleClear}>
          <img src="./deleteIcon.png" className="w-6 h-6" alt="Icon" />
        </button>
      </div>

    </div >
  )
}
