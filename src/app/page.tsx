import { Navbar } from "./screens/components/navbar";
import { SideBar } from "./screens/components/sidebar";
import { HomeScreen } from "./screens/home/HomeScreen";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeScreen />
    </>
  );
}
