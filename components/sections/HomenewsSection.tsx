import { SectionHeader } from "../SectionHeader"
import { NewsSection } from "./NewsSection"
import { getNewsEvents } from "@/lib/actions/news";


export default async function HomenewsSection() {
    const news = await getNewsEvents();
    return (

        <section className="w-full p-4">
            <div className="w-full mx-auto space-y-4 xl:space-y-8">
                <SectionHeader title={<>News and <br /> events</>}>
                    The World Federation of Shotokan Karate is proud to announce that we are producing more black belts every year. Our instructors are highly experienced and dedicated to teaching students the art of Shotokan Karate. Join us today!
                </SectionHeader>


                <NewsSection news={news} />
            </div>
        </section>
    );
}