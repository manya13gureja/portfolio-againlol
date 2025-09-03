'use client'
import React from 'react';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import dynamic from 'next/dynamic'
import { TitleAnimator } from '@/components/TitleAnimator';


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