import Button from "./components/Button"
import foto from "./assets/foto profil.jpg"

function App() {
  return (
    <div id="header" className="bg-[#141414] h-screen flex justify-center items-center">
      <div id="container" className="w-[60%] bg-[#1F1F1F] min-h-[75%] px-[30px] flex flex-col justify-center gap-[20px] md:w-[25%]">
        <div id="image" className="">
            <img src={foto} alt="foto profil" className="mx-auto flex justify-center items-center rounded-[95%] h-[70px] w-[70px]" />
        </div>
        <div className="flex justify-center flex-col">
            <h1 id="name" className="text-white text-center">Damar NurFadhil Akbar</h1>
            <p id="location" className="text-[#c5f82a] flex justify-center">Indonesia, Jakarta</p>
        </div>
        <div>
          <p id="bio" className="text-white text-center text-[14px]">"Casual Learner"</p>
        </div>
        <div className="flex flex-col gap-3">
          <Button deskripsi={"GitHub"} href={"https://github.com/damarnur"}/>
          <Button deskripsi={"Facebook"} href={"https://www.facebook.com/damar.nurfadhilakbar/"}/>
          <Button deskripsi={"LinkedIn"} href={"https://www.linkedin.com/in/damar-nur-62b3212b7/"}/>
          <Button deskripsi={"Instagram"} href={"https://www.instagram.com/_dmrnur/"}/>
        </div>
      </div>
    </div>
  )
}

export default App
