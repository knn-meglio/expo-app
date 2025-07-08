import { Image as ExpoImage } from "expo-image";
import { cssInterop } from "nativewind";

const StyledImage = cssInterop(ExpoImage, {
  className: "style",
});

export default StyledImage;
