import React from 'react'
import BadgeHighlight from './components/badge-highlight'
import HeroTitle from './components/hero-title'
import ActionButtons from './components/action-buttons'
import HeroImage from './components/hero-image'
import Testimonials from './components/testimonials'
import ListCategory from './components/list-categories'
import ListProducts from './components/list-products'
import ListBrands from './components/list-brands'
import NavbarHome from './components/navbar'

export default function HomePage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <NavbarHome />
        <div className="container max-w-[1130px] mx-auto flex items-center justify-between gap-1 mt-[50px]">
          <div className="flex flex-col gap-[30px]">
            <BadgeHighlight />
            <HeroTitle />
            <ActionButtons />
          </div>
          <HeroImage />
        </div>
        <Testimonials />
      </header>
      <section id="content" className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px]">
        <ListCategory />
        <ListProducts title={<>Most Picked <br /> Quality Products</>} />
        <ListBrands />
        <ListProducts title={<>New Releases <br /> From Official Stores</>} />
      </section>
    </>
  )
}
