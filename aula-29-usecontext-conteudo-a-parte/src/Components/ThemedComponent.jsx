import React, {useContext} from 'react'
import {ThemeContext} from '../Context/Context'

export const ThemedComponent = () => {
    // Here you import all the functions or states that you want to use
    const {theme, setTheme} = useContext(ThemeContext)

    console.log(theme)

  return (
    <div style={{background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff'}}>
        <p>The current theme is {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            Toggle Theme
        </button>
    </div>
  )
}
