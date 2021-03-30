import { useState, useEffect } from "react";

// https://dmitripavlutin.com/controlled-inputs-using-react-hooks/

export function useDebouncedValue(value, wait) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Function is only called once the waiting period has been fully completed
    const id = setTimeout(() => setDebouncedValue(value), wait);
    return () => clearTimeout(id);
  }, [value]);

  return debouncedValue;
}
