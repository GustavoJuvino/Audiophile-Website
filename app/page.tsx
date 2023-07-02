import Main from "./Components/Home/Main";
import Products from "./Components/Products";

export default function Home() {
  return (
    <main className="w-full h-auto flex flex-col justify-center items-center">
      <Main />
      <Products />
    </main>
  )
}
