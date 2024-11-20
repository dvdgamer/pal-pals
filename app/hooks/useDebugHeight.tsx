import { useEffect } from 'react';
import { Dimensions, View } from 'react-native';

export const useDebugHeight = (ref: React.RefObject<View>, screenName: string) => {
  useEffect(() => {
    const screenHeight = Dimensions.get('window').height;

    const logHeights = () => {
      if (ref.current) {
        ref.current.measure((x, y, width, height) => {
          console.log(screenName, 'Screen Height:', screenHeight);
          console.log(screenName, 'Content Height:', height);
        });
      }
    };

    logHeights();

    const interval = setInterval(logHeights, 1000);

    return () => clearInterval(interval);
  }, [ref]);
};
