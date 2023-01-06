import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components/native";
import theme from "./src/styles/theme";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { StatusBar } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </>
    );
  }
}
