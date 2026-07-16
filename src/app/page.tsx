import Categories from "@/components/HomePage/Categories";
import FAQ from "@/components/HomePage/FAQ";
import FeaturedCourses from "@/components/HomePage/FeaturedCourses";
import Hero from "@/components/HomePage/Hero";
import Newsletter from "@/components/HomePage/Newsletter";
import Statistics from "@/components/HomePage/Statistics";
import Testimonials from "@/components/HomePage/Testimonials";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs";


export default function Home() {
  return (
    <div>

<Hero/>
<FeaturedCourses/>

<Categories/>
<WhyChooseUs/>
<Statistics/>
<Testimonials/>
<FAQ/>
<Newsletter/>
    </div>
  );
}
