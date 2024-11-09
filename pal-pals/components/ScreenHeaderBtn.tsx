import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

interface ScreenHeaderBtnProps {
  title: string;
  onClick: () => void;
  iconUrl: any;
  dimension: any;
}


const ScreenHeaderBtn = ({ onClick, iconUrl, dimension }: ScreenHeaderBtnProps) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={[dimension, styles.image]}
      />
      {/* <Text>{title}</Text> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    marginVertical: 16,
    marginHorizontal: 20,
  },
});

export default ScreenHeaderBtn;
