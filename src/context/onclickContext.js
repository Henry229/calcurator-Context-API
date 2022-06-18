import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const OnClickContext = createContext(null);

// const OnClickContext = React.createContext();

// export const useOnClick = () => {
//   return useContext(OnClickContext);
// };
 
// const OnclickProvider = ({children}) => {
//   const [state, setState] = useState ({
//     previousOperand: null,
//     operator: null,
//     currentOperand: null,
//     overwrite: null,
//   });

//   return (
//     <OnClickContext.Provider value={{state, setState}} >
//       {children}
//     </OnClickContext.Provider>
//   )
// }

// export default OnclickProvider;
