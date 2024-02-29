import {useState, useEffect} from 'react';

const useKeyboardVisible = () => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowHandler = () => {
      setKeyboardVisible(true);
    };

    const keyboardHideHandler = () => {
      setKeyboardVisible(false);
    };

    window.addEventListener('keyboardDidShow', keyboardShowHandler);
    window.addEventListener('keyboardDidHide', keyboardHideHandler);

    return () => {
      window.removeEventListener('keyboardDidShow', keyboardShowHandler);
      window.removeEventListener('keyboardDidHide', keyboardHideHandler);
    };
  }, []);

  return isKeyboardVisible;
};

export default useKeyboardVisible;
