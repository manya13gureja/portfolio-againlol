'use client'
import React from 'react';
import type { AppProps } from 'next/app'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { Navigation } from '@/components/navigation';
import dynamic from 'next/dynamic'


const MyGrid = dynamic(() => import('@/components/Mygrid'), { ssr: false })

export default function Home() {
  return (
    <main className="p-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='mx-52 my-48'>
      <MyGrid />
      </div>
    </main>
  )
}