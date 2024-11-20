import { useEffect } from 'react';
import { Dimensions, View } from 'react-native';

export const useDebugHeight = (ref: React.RefObject<View>, label: string) => {
  useEffect(() => {
    console.log(`[${label}] useDebugHeight called`);

    const screenHeight = Dimensions.get('window').height;

    const logHeights = () => {
      if (ref.current) {
        console.log(`[${label}] Measuring heights`);
        ref.current.measure((x, y, width, height) => {
          console.log(`[${label}] Screen Height:`, screenHeight);
          console.log(`[${label}] Content Height:`, height);
        });
      } else {
        console.log(`[${label}] ref.current is null`);
      }
    };

    logHeights();

    const interval = setInterval(logHeights, 1000);

    return () => clearInterval(interval);
  }, [ref, label]);
};
