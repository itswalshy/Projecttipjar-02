import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { TipContextProvider } from "./context/TipContext";
import AppHeader from "./components/AppHeader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <TipContextProvider>
      <div className="flex-grow w-full bg-[#2F4F4F] text-[#f5f5f5] min-h-screen flex flex-col">
        <AppHeader />
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 flex-grow w-full">
          <div className="flex-grow">
            <Router />
          </div>
        </main>
        <footer className="w-full border-t border-[#3A5F5F] mt-8 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center text-sm">
            <div className="font-medium text-[#f5f5f5]">Made by William Walsh</div>
            <div className="text-[#9fd6e9] text-xs mt-1">Starbucks Store# 69600</div>
          </div>
        </footer>
      </div>
    </TipContextProvider>
  );
}

export default App;
