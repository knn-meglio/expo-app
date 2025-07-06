import { BlurView } from "expo-blur";

const BlurTabbarBackground = () => {
  return (
    <BlurView
      intensity={60}
      tint="systemChromeMaterial"
      className="absolute inset-0 z-10"
    />
  );
};

export default BlurTabbarBackground;
