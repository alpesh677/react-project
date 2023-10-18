import React, { useEffect, useState } from 'react';

export default function Darkmode() {
    const [theme, setTheme] = useState("light");

    // Add an event listener to update the theme class when the theme state changes.
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleDarkMode = () => {
        // Toggle between "light" and "dark" modes.
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <div className='flex h-screen justify-center items-center bg-white dark:bg-black'>
            <button
                className={`bg-green-600 rounded-xl p-4 `}
                onClick={handleDarkMode}
            >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

