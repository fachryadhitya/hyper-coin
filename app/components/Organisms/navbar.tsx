'use client';
import Image from 'next/image';
import Text from '../Atoms/text';
import Button from '../Atoms/button';
import NavDropdown from '../Molecules/navDropdown';
import NavLink from '../Molecules/navLink';
import AccordionContent from '../Molecules/accordionContent';
import { INavbar } from '@/app/interface/interface';

export default function Navbar({ navContent }: { navContent: INavbar }) {
  const { navbar } = navContent ?? {};

  const logoData = navbar?.[0];
  const logoSubLinkedData = navbar?.[1];
  const { title, subLinks } = logoSubLinkedData ?? {};

  return (
    <section className="hidden lg:block">
      <nav className="flex justify-between items-center h-[60px] relative box-border px-4 max-w-[1201.5px] w-full mx-auto">
        <div className="logo_image_wrapper relative w-[114px] height-[21px]">
          <Image src={logoData?.icon || ''} alt={logoData?.logo || ''} width={114} height={21} priority unoptimized />
        </div>
        <ul className={`nav_links flex gap-[60px] sidebar transition-left left-full`}>
          <NavLink className="max-md:hidden">
            <Text>{title}</Text>
            <span className="material-symbols-outlined text-white">keyboard_arrow_down</span>
            <NavDropdown sublinks={subLinks} />
          </NavLink>
          <AccordionContent />
          <NavLink>
            <Text>{navbar?.[2]?.title}</Text>
          </NavLink>
          <NavLink>
            <Button className="md:hidden">{navbar?.[3]?.title}</Button>
          </NavLink>
        </ul>
        <Button className="max-md:hidden font-black">{navbar?.[3]?.title}</Button>
      </nav>
    </section>
  );
}
