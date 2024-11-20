import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import ScreenHeaderBtn from './ScreenHeaderBtn';
import { logout } from '../../services/api';
import ConfirmationPopUp from './ConfirmationPopUp';

export default function LogoutIcon() {
  const navigation = useNavigation<any>();
  const [popupVisible, setPopupVisible] = useState(false);


  const handleLogout = async () => {
    try {
      await logout();
      navigation.navigate('Sign in');
      setPopupVisible(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <>
      <ConfirmationPopUp
        visible={popupVisible}
        message="You want to log out?"
        confirmText='Log out'
        onConfirm={handleLogout}
        onCancel={() => {
          setPopupVisible(false);
        }}
      />
      <ScreenHeaderBtn
        title="Logout"
        onClick={() => setPopupVisible(true)}
        iconUrl={require('../../assets/images/logoutIcon.png')}
        dimension={{ width: 30, height: 30 }}
      />
    </>
  );
};
