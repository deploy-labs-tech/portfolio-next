import { motion } from "framer-motion";
import { Sidebar } from "../layout/sidebar";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "@/assets";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="h-24">
      <Sidebar />
      <article className="max-w-7xl ml-16 flex items-center justify-between h-full p-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="none md:inline font-bold text-white uppercase"
        >
          Tyler Dodd
        </motion.span>
        <div className="flex gap-4">
          
          <Link href="https://wwww.linkedin.com/in/tyler-dodd-a68497406" target="_blank">
            <LinkedinIcon className="w-6 h-6 text-white" />
          </Link>
        </div>
      </article>
    </nav>
  );
};
