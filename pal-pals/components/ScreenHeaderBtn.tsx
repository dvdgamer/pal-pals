import { TouchableOpacity, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ScreenHeaderBtnProps {
  title: string;
  onClick: () => void;
  iconUrl: any;
  dimension: any;
}

const ScreenHeaderBtn: React.FC<ScreenHeaderBtnProps> = ({
  iconUrl,
  dimension,
  onClick,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onClick}>
      <Image
      source={iconUrl}
      resizeMode="cover"
      style={dimension}
      className="my-4 mx-4"
       />
      {/* <Text>{title}</Text> */}
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
