import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "../../styles/themes/main.js";
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Elf() {
  return (
    <ThemeProvider theme={mainTheme}>
       <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ancestry">Ancestry</Link>
        </li>
      </ul>
      <h1> Elves </h1>
    </ThemeProvider>
  )
}
