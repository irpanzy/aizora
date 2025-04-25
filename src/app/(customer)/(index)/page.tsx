import Image from 'next/image'
import React from 'react'
import Navbar from './components/navbar'
import BadgeHighlight from './components/badge-highlight'
import HeroTitle from './components/hero-title'
import ActionButtons from './components/action-buttons'
import HeroImage from './components/hero-image'
import Testimonials from './components/testimonials'

export default function HomePage() {
  return (
    <>
      <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <Navbar />
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
        <div id="categories" className="flex flex-col gap-[30px]">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl leading-[34px]">Browse Products <br /> by Categories</h2>
            <a href="catalog.html" className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">Explore All</a>
          </div>
          <div className="grid grid-cols-4 gap-[30px]">
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/mobile.svg"
                    alt="Mobile Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Phones</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/game.svg"
                    alt="Game Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Games</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/airpods.svg"
                    alt="Airpods Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Headsets</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/box.svg"
                    alt="Box Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Essenstials</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/lamp.svg"
                    alt="Lamp Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Lights</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/watch.svg"
                    alt="Watch Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Watches</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/monitor.svg"
                    alt="Monitor Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Desktops</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
            <a href="" className="categories-card">
              <div className="bg-white flex items-center gap-[14px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#0D5CD7] items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/icons/cup.svg"
                    alt="Cup Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold leading-[22px]">Awards</p>
                  <p className="text-sm text-[#616369]">4,583 products</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="picked" className="flex flex-col gap-[30px]">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl leading-[34px]">Most Picked <br /> Quality Products</h2>
            <a href="catalog.html" className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">Explore All</a>
          </div>
          <div className="grid grid-cols-5 gap-[30px]">
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                    alt="Image description"
                    width={500}  // Specify the width here
                    height={500} // Specify the height here
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">iMac Green Energy</p>
                    <p className="text-sm text-[#616369]">Desktops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 24.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                    alt="iPhone 15 Pro"
                    width={600}  // Set the width as per your design needs
                    height={400} // Set the height as per your design needs
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Smartwei Pro 18</p>
                    <p className="text-sm text-[#616369]">Phones</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 11.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                    alt="Banner Image"
                    width={600}  // Set the width you need
                    height={400} // Set the height you need
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">MacBook Pro X</p>
                    <p className="text-sm text-[#616369]">Laptops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 24.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                    alt="AirPods Max"
                    width={600}  // Set width as per your design
                    height={400} // Set height as per your design
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Tuli Nyaman</p>
                    <p className="text-sm text-[#616369]">Headsets</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 3.500.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                    alt="iMac 24"
                    width={600}  // Specify the width as needed
                    height={400} // Specify the height as needed
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Warna iMac Jadi</p>
                    <p className="text-sm text-[#616369]">Desktops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 89.000.000</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="brands" className="flex flex-col gap-[30px]">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl leading-[34px]">Explore Our <br /> Popular Brands</h2>
            <a href="catalog.html" className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">Explore All</a>
          </div>
          <div className="grid grid-cols-5 gap-[30px]">
            <a href="" className="logo-card">
              <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/logos/microsoft.svg"
                    alt="Microsoft Logo"
                    width={100}  // Specify the width as needed
                    height={100} // Specify the height as needed
                  />
                </div>
              </div>
            </a>
            <a href="" className="logo-card">
              <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/logos/apple.svg"
                    alt="Apple Logo"
                    width={100}  // Specify the width as needed
                    height={100} // Specify the height as needed
                  />
                </div>
              </div>
            </a>
            <a href="" className="logo-card">
              <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/logos/samsung.svg"
                    alt="Samsung Logo"
                    width={100}  // Specify the width as needed
                    height={100} // Specify the height as needed
                  />
                </div>
              </div>
            </a>
            <a href="" className="logo-card">
              <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/logos/huawei.svg"
                    alt="Huawei Logo"
                    width={100}  // Specify the width as needed
                    height={100} // Specify the height as needed
                  />
                </div>
              </div>
            </a>
            <a href="" className="logo-card">
              <div className="bg-white flex items-center justify-center p-[30px_20px] rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[30px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/logos/nokia.svg"
                    alt="Nokia Logo"
                    width={100}  // Specify the width as needed
                    height={100} // Specify the height as needed
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div id="new-release" className="flex flex-col gap-[30px]">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl leading-[34px]">New Releases <br /> From Official Stores</h2>
            <a href="catalog.html" className="p-[12px_24px] border border-[#E5E5E5] rounded-full font-semibold">Explore All</a>
          </div>
          <div className="grid grid-cols-5 gap-[30px]">
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                    alt="Green Background"
                    width={600}  // Specify the width you need
                    height={400} // Specify the height you need
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">iMac Green Energy</p>
                    <p className="text-sm text-[#616369]">Desktops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 24.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                    alt="iPhone 15 Pro"
                    width={600}  // Specify the width you want (in pixels)
                    height={400} // Specify the height you want (in pixels)
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Smartwei Pro 18</p>
                    <p className="text-sm text-[#616369]">Phones</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 11.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                    alt="Banner Image"
                    width={800}  // Membuat gambar mengisi penuh kontainer
                    height={600}  // Menjaga proporsi gambar tetap benar
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">MacBook Pro X</p>
                    <p className="text-sm text-[#616369]">Laptops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 24.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                    alt="AirPods Max"
                    width={800}        // Makes the image fill the parent container
                    height={600}    // Ensures the image maintains its aspect ratio while filling the space
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Tuli Nyaman</p>
                    <p className="text-sm text-[#616369]">Headsets</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 3.500.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                    alt="iMac 24"
                    width={800}   // Lebar gambar dalam piksel
                    height={600}  // Tinggi gambar dalam piksel
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Warna iMac Jadi</p>
                    <p className="text-sm text-[#616369]">Desktops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 89.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/imac24-digitalmat-gallery-1-202310-Photoroom 1.png"
                    alt="iMac 24"
                    width={800}   // Lebar gambar dalam piksel
                    height={600}  // Tinggi gambar dalam piksel
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Warna iMac Jadi</p>
                    <p className="text-sm text-[#616369]">Desktops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 89.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/airpods-max-select-skyblue-202011-Photoroom 1.png"
                    alt="AirPods Max"
                    width={800}   // Lebar gambar dalam piksel
                    height={600}  // Tinggi gambar dalam piksel
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Tuli Nyaman</p>
                    <p className="text-sm text-[#616369]">Headsets</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 3.500.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/color_back_green__buxxfjccqjzm_large_2x-Photoroom 1.png"
                    alt="Gambar Thumbnail"
                    width={800}   // Lebar gambar dalam piksel
                    height={600}  // Tinggi gambar dalam piksel
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">iMac Green Energy</p>
                    <p className="text-sm text-[#616369]">Desktops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 24.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/thumbnails/iphone15pro-digitalmat-gallery-3-202309-Photoroom 1.png"
                    alt="iPhone 15 Pro"
                    width={800}   // Lebar gambar dalam piksel
                    height={600}  // Tinggi gambar dalam piksel
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">Smartwei Pro 18</p>
                    <p className="text-sm text-[#616369]">Phones</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 11.000.000</p>
                </div>
              </div>
            </a>
            <a href="details.html" className="product-card">
              <div className="bg-white flex flex-col gap-[24px] p-5 rounded-[20px] ring-1 ring-[#E5E5E5] hover:ring-2 hover:ring-[#FFC736] transition-all duration-300 w-full">
                <div className="w-full h-[90px] flex shrink-0 items-center justify-center overflow-hidden">
                  <Image
                    src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png"
                    alt="MBA13-M2 Banner"
                    width={800}   // Lebar gambar dalam piksel
                    height={600}  // Tinggi gambar dalam piksel
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold leading-[22px]">MacBook Pro X</p>
                    <p className="text-sm text-[#616369]">Laptops</p>
                  </div>
                  <p className="font-semibold text-[#0D5CD7] leading-[22px]">Rp 24.000.000</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
