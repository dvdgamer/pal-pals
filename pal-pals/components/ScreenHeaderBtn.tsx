import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ScreenHeaderBtnProps {
  title: string;
  onClick: () => void;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({ title, onClick }) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onClick}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
