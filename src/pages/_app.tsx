import '../styles/globals.css'; 
import { ThemeProvider } from "../components/ThemeProvider";
import { AppProps } from "next/app";
// import Image from "next/image";
// import LeafletMap from "@/components/maps/LeafletMap";
// import Button from "@/components/ui/Button";
// import { motion } from "framer-motion";
// import { ThemeToggle } from "@/components/ThemeToggle";
// import Link from "next/link";

const MyApp = ({ Component, pageProps}: AppProps) => {
  return (
    <ThemeProvider>
      < Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;