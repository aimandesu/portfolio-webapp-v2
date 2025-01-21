import "./App.css";
import "./index.css";
import { Button } from "./components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import Profile from "./pages/Profile";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      {/* <Button variant="outline">Button</Button> */}
      <Tabs defaultValue="account" className="p-5 bg-dark">
        <TabsList className="p-5   max-md:w-[100%] justify-around">
          <TabsTrigger value="account" className="w-full">
            Profile
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="w-full">
            Portfolio
          </TabsTrigger>
          <TabsTrigger value="resume" className="w-full">
            Resume
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Profile />
        </TabsContent>
        <TabsContent value="portfolio">Change your portfolio here.</TabsContent>
        <TabsContent value="resume">
          <Resume />
        </TabsContent>
      </Tabs>
    </>
  );
}

export default App;
