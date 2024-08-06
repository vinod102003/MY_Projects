import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-14">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-xl rounded-xl">
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            blue
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            orange
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            grey
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            pink
          </button>
          <button
            className="px-4 py-1 text-white rounded-full shadow-sm outline-none"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
