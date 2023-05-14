"use client";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Header, Main, Container } from '@/components'
export default function Home() {
  return (
    <>
      <ToastContainer />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  )
}
