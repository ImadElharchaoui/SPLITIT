
import Navbar from "@/components/Home/Navbar"
import Banners from "@/components/Home/Banners";
import Footer from "@/components/Home/Footer";

const page = () => {
  return (
    <div className='bg-#d4d4d4'>
      <Navbar />
      
      {/*<div className='flex justify-center items-center font-Edu w-full'>
        <h1 className='text-5xl font-bold text-accent font-Edu py-20'>Welcome to Split It</h1>
      </div>*/}
      <Banners />
      <Footer />
      
    </div>
  );
};

export default page;