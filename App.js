import StackRoutes from "./app/routes/StackRoutes";

//Fonts
import { useFonts } from "expo-font";

const App = () => {
  const [loaded, error] = useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StackRoutes />
    </>
  );
};

export default App;
