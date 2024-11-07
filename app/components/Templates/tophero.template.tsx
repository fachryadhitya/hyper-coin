import HeroJumbotron from "../Organisms/heroJumbotron";
import Navbar from "../Organisms/navbar";

export default async function TopNavHero({ lang }: { lang: string }) {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const navUrl = `${baseUrl}/api/nav-data?locale=${lang}`;
    const heroUrl = `${baseUrl}/api/hero-data?locale=${lang}`;

    const [navResponse, heroResponse] = await Promise.all([fetch(navUrl), fetch(heroUrl)]);
    const navData = await navResponse.json();
    const heroData = await heroResponse.json();
    const { heroContent, heroContent2 } = heroData ?? {};

    return (
        <section className="main_jumbotron max-lg:pb-[60px] pb-[108px]">
            <Navbar navContent={navData} />
            <HeroJumbotron leftContent={heroContent} rightContent={heroContent2} />
        </section>
    )
}