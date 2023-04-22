import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-32 py-8 font-medium">
      <nav className="flex justify-end">
        <Link href="/" target={"_blank"} className="px-3">
          Twitter
        </Link>
        <Link href="/" target={"_blank"} className="px-3">
          Email
        </Link>
        <Link href="/" target={"_blank"} className="px-3">
          LinkedLn
        </Link>
      </nav>
    </footer>
  );
}
