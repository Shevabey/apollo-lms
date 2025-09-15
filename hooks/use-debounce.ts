import { useEffect, useState } from 'react';

/**
 * A hook that returns a debounced value that only updates after the specified delay has passed
 * without any new updates to the original value.
 *
 * @param value The value to debounce
 * @param delay The delay in milliseconds (default: 500ms)
 * @returns The debounced value
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearch = useDebounce(searchTerm);
 *
 *   useEffect(() => {
 *     // This will only run after the user stops typing for 500ms
 *     performSearch(debouncedSearch);
 *   }, [debouncedSearch]);
 *
 *   return (
 *     <input
 *       type="text"
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *     />
 *   );
 * };
 * ```
 */
export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up the timeout to update the debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timeout if the value changes or the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * A hook that returns a debounced function that only executes after the specified delay has passed
 * without any new invocations.
 *
 * @param callback The function to debounce
 * @param delay The delay in milliseconds (default: 500ms)
 * @returns A debounced version of the callback function
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const debouncedSave = useDebouncedCallback((value: string) => {
 *     // This will only run once after the last call
 *     saveToServer(value);
 *   }, 1000);
 *
 *   return (
 *     <input
 *       type="text"
 *       onChange={(e) => debouncedSave(e.target.value)}
 *     />
 *   );
 * };
 * ```
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  callback: T,
  delay: number = 500
): (...args: Parameters<T>) => void {
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  return (...args: Parameters<T>) => {
    // Clear the existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set up a new timeout
    const newTimeoutId = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimeoutId(newTimeoutId);
  };
}
