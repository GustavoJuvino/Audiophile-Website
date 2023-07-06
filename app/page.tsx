import Main from "./Components/Home/Main";
import Categories from "./Components/Categories";
import ContainerProducts from "./Components/Home/ContainerProducts";
import AudioGear from "./Components/AudioGear";

export default function Home() {
  return (
    <main className="
        w-full
        h-auto
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <Main />
      <Categories />
      <ContainerProducts />
      <div className="lg:my-[12.5rem] sm:my-24 my-[7.5rem]">
        <AudioGear />
      </div>
    </main>
  )
}
