import Header from "./assets/Header"

function App() {
  return (
    <>
      {/* CSS INLINE
      style={
        {
          backgroundColor: "green",
          color: "white"
        }
      } */}
      <Header/>
      {/* O Tailwind já é responsivo por padrão, utilizando o rem */}
      {/* Mobile First */}
      <h1 className="text-primaryFiap text-5xl w-[327px] mb-2 pl-3 flex justify-center rounded items-center md:text-green-500 font-bold">Título da página</h1>
      {/* Podemos adicionar cores ao extend */}
      {/* ALT + Z: QUEBRAR LINHA */}
      {/* COMPONENTES PRONTOS */}
      {/* https://tailwindui.com/ */}
      {/* SHADCN */}
      {/* https://ui.shadcn.com/ */}
      {/* DAISYUI */}
      {/* https://daisyui.com/ */}
      {/* HOVER DEV */}
      {/* https://www.hover.dev/ */}
      {/* FRAMER MOTION */}
      {/* https://www.framer.com/motion/ */}
      {/* GSAP */}
      {/* https://gsap.com/ */}
      {/* THREEJS */}
      {/* https://threejs.org/ */}
      {/* FONTAWESOME */}
      {/* https://fontawesome.com/ */}
      {/* REACT ICONS */}
      {/* https://react-icons.github.io/react-icons/ */}
    </>
  )
}

export default App
