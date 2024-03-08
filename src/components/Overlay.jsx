import { useState } from "react";
import { ToggleButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

// const Section = (props) => {
//   return (
//     <section
//       className={`h-screen flex flex-col justify-center p-10 ${
//         props.right ? "items-end" : "items-start"
//       }`}
//       style={{
//         opacity: props.opacity,
//       }}
//     >
//       <div className="w-1/2 flex items-center justify-center">
//         <div className="max-w-sm w-full">
//           <div className="bg-white  rounded-lg px-8 py-12">
//             {props.children}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export function Overlay() {
  const [selected, setSelected] = useState(false);

  return (
    <html className="App h-screen bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
              <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
            </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
          </div>
        <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          <CheckIcon />
        </ToggleButton>
    </html>
  )};
