import AnimatedText from "@/lib/animatedText";
import Link from "next/link";
import { ImNewTab } from "react-icons/im";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-dark w-full mx-auto min-h-screen bg-[url('.././public/images/background-light.jpg')] bg-center bg-no-repeat bg-cover">
        {/* <h1 className="pt-0 pb-5 text-5xl font-bold">
          HEY, I'M OBALOLUWA OLUSOJI
        </h1> */}
        <div className="">
          <AnimatedText
            text="HEY, I'M OBALOLUWA OLUSOJI"
            className="text-6xl"
          />
        </div>
        <p className="py-5 px-10 text-2xl font-medium mb-5">
          A Software Engineer with skillset across Fullstack Web Development,
          Blockchain Development and DevOps
        </p>
        <div>
          <Link
            href="/about"
            className=" bg-amber-500 text-dark p-4 px-8 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light"
          >
            Expertise
          </Link>
          <Link
            href="https://drive.google.com/file/d/1BKJbI-c5hs58KbFQZyfqLOkzhGMf1mNO/view?usp=sharing"
            target={"_blank"}
            className="ml-4 text-lg font-medium capitalize text-dark underline"
          >
            Resume
          </Link>
        </div>
      </main>
    </>
  ); //bg-dark text-light p-4 px-8 rounded-lg text-lg font-semibold hover:bg-gray-400 hover:text-dark border-2 border-solid border-transparent hover:border-dark
}
