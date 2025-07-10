function DarkModeToggle({ darkMode, setDarkMode }) {
  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;