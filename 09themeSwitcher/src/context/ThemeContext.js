import { useContext, createContext } from "react";

//creating context with default values
export const ThemeContext = createContext({
    themeMode : "light",
    lightMode : ()=>{},
    darkMode : ()=>{}
})

//creating provider for context
export const ThemeProvider = ThemeContext.Provider;

//creating custom hook to use theme context
const useTheme =()=>{
     return useContext(ThemeContext)
}
export default useTheme;