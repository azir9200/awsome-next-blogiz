import Image from "next/image";

import Container from "@/src/components/UI/Container";

const AboutPage = () => {
  return (
    <div>
      <Container>
        {/* page header */}
        <div className="flex flex-col items-center text-center gap-4 font-medium py-14 md:py-16 lg:py-20">
          <span className="text-3xl font-semibold border rounded-xl px-3 py-1">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-slate-50 pt-2 max-w-screen-lg">
            Fitness Mind is bringing best services sharing back to life with
            ease.
          </h1>
          <p className="font-medium md:text-lg">
            Stop struggling with outdated platforms. Its time to start exploring
            the joy of sharing.
          </p>
        </div>

        {/* images gallery section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-3">
            <Image
              alt="recipe image"
              className="w-full h-full object-cover rounded-xl"
              height={200}
              src="https://cbx-prod.b-cdn.net/COLOURBOX64925723.jpg?width=800&height=800&quality=70"
              width={270}
            />
          </div>
          <div className="md:col-span-6">
            <Image
              alt="recipe image"
              className="w-full h-full object-cover rounded-xl"
              height={200}
              src="https://cbx-prod.b-cdn.net/COLOURBOX61339089.jpg?width=800&height=800&quality=70"
              width={270}
            />
          </div>
          <div className="md:col-span-3">
            <Image
              alt="recipe image"
              className="w-full h-full object-cover rounded-xl"
              height={200}
              src="https://content.jdmagicbox.com/comp/vizianagaram/a8/9999p8922.8922.221109230452.y3a8/catalogue/body-fitness-gym-vizianagaram-gyms-lag8bnx25s.jpg"
              width={270}
            />
          </div>
        </div>
        {/* our mission section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between py-16">
          <div className="md:col-span-2">
            <h1 className="text-slate-900 dark:text-slate-50 text-2xl md:text-3xl font-extrabold mb-4">
              Your Vision
            </h1>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              We envision a vibrant community where food lovers, home cooks, and
              culinary enthusiasts come together to share, explore, and
              celebrate the art of cooking. Our platform inspires creativity and
              connection through the universal language of food.
            </p>
            <p className="text-slate-600 dark:text-slate-300 font-medium">
              By revolutionizing the way recipes are shared and discovered, we
              empower individuals to explore new cuisines, perfect their skills,
              and express their culinary passion. Join us in building a
              community where every recipe tells a story and every cook finds
              their voice.
            </p>
          </div>
          <div className="bg-primary dark:bg-primary-50 text-white p-6 rounded-md">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-4">
              Our Mission
            </h1>
            <p className="font-medium">
              We aim to create a seamless platform for discovering, sharing, and
              preserving recipes. By fostering a collaborative environment, we
              empower cooks of all levels to connect, learn, and grow. Together,
              we celebrate the joy of cooking and the love of sharing meals.
            </p>
          </div>
        </div>
        {/* our team section */}
        <div className="py-8 md:py-12">
          <h1 className="text-slate-900 dark:text-slate-50 text-3xl md:text-4xl font-extrabold mb-4 text-center">
            Meet Our Team
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium text-center">
            Our team united by passion, driven by excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://www.airdesignspokane.com/wp-content/uploads/2016/04/serviceman.png"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Adrian</h3>
                <p className="font-semibold">Team Leader</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://wheelforcecentre.com/wp-content/uploads/2021/04/Mechanic-wheel-force-centre-transparent.png"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Anto</h3>
                <p className="font-semibold">Chief Executive Officer</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-400 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://cdn.prod.website-files.com/61713dc07218ee71af5413af/6761a87df1f743102db407b4_What%20to%20Look%20for%20in%20Gym%20Management%20Software-1-min.jpg"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Andrew</h3>
                <p className="font-semibold">Designer</p>
              </div>
            </div>
            <div className="min-h-96 bg-gradient-to-t from-black to-zinc-500 relative flex justify-center rounded-lg">
              <Image
                alt="team member image"
                className="bg-cover object-cover bg-center mix-blend-overlay h-full w-full"
                height={200}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWudwCTPpTO_XbmXFkdUiXtNLIsJnoAUlgQ&s"
                width={270}
              />
              <div className="text-center text-white py-6 absolute bottom-2">
                <h3 className="text-xl font-bold">Lucass Finn</h3>
                <p className="font-semibold">Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
        {/* history and achievement section */}
        {/* <HistorySection /> */}
        {/* contact section */}
        {/* <ContactSection /> */}
      </Container>
    </div>
  );
};

export default AboutPage;
