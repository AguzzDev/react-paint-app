import { PaintCanvas } from "../components/PaintCanvas";
import { Sidebar } from "../components/Sidebar";

export default function PaintScreen() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Sidebar />

      <PaintCanvas />

      <div className="h-20 w-full"></div>
    </div>
  )
}
