import { Footer, Header, NavBar } from "./Components/Common";
import { CartProvider } from "./context/cartContext";


function App() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Header />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
