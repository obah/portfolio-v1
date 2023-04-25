import AnimatedText from "@/lib/animatedText";
import Link from "next/link";

export default function Contact() {
  return (
    <section>
      <div>
        <AnimatedText text="Contact Me" className="" />
        <p>Wanna hire me or collaborate?</p>
        <p>
          You can easily contact me through the any of these links or send me an
          email, I will respond as soon as possible
        </p>
      </div>
      <div>
        <Link href="mailto:obaloluwaolusoji@gmail.com">
          obaloluwaolusoji@gmail.com
        </Link>
        <Link href="https://wa.me/4btbvn">WhatsApp</Link>
        <Link href="https://www.linkedin.com/in/obaloluwa">LinkedIn</Link>
        <Link href="https://www.github.com/obah">Github</Link>
        <Link href="https://twitter.com/Oba_Ddev">Twitter</Link>
      </div>
    </section>
  );
}
