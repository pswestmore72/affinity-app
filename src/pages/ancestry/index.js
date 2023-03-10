import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "../../styles/themes/main.js";
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Ancestry() {
  return (
    <ThemeProvider theme={mainTheme}>
       <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/ancestry">Ancestry</Link>
        </li>
        <li>
          <Link href="/ancestry/elf">Elf</Link>
        </li>
      </ul>
      {/* <Button color="primary" variant="contained">
          Primary
      </Button>
      <Button color="secondary" variant="contained">
        Secondary
      </Button> */}
    </ThemeProvider>
  )
}
