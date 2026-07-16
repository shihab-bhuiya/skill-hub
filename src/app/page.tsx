import Categories from "@/components/HomePage/Categories";
import FeaturedCourses from "@/components/HomePage/FeaturedCourses";
import Hero from "@/components/HomePage/Hero";
import Statistics from "@/components/HomePage/Statistics";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";


export default function Home() {
  return (
    <div>

<Hero/>
<FeaturedCourses/>

<Categories/>
<WhyChooseUs/>
<Statistics/>

    </div>
  );
}
