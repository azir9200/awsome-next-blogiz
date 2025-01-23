import Image from "next/image";

const InfoPage = () => {
  return (
    <div className=" bg-base-200">
      <div className="  justify-center flex-col lg:flex-row">
        <div className="justify-center space-y-5 p-4">
          <h3 className="text-3xl bg-white rounded-full text-orange-500 font-bold text-center">
            Who we are
          </h3>
          <h1 className="text-5xl font-bold text-center">
            We are qualified & of experience in this field
          </h1>
          <p className="py-8 px-12 justify-center text-center text-2xl">
            A lot of times when people are fatigued, the last thing they want to
            do is exercise,” says researcher Patrick O’Connor, PhD, in a news
            release. “But if you’re physically inactive and fatigued, being just
            a bit more active will help,” says O’Connor.
          </p>
          <p className="py-8 px-12 justify-center text-center text-2xl">
            Research suggests that regular exercise can increase energy levels
            even among people suffering from chronic medical conditions
            associated with fatigue, like cancer and heart disease. This may
            seem counterintuitive, but researchers say expending energy by
            engaging in regular exercise may pay off with increased energy in
            the long run!
          </p>
        </div>

        <div className=" lg:flex justify-center  items-center gap-6 ">
          <Image
            alt="image1"
            className="rounded-lg border-8 border-white shadow-2xl"
            height={500}
            src="https://img.freepik.com/premium-photo/muscular-man-doing-heavy-weight-exercise-biceps-with-dumbbells-modern-gym_600776-26473.jpg"
            width={500}
          />

          <Image
            alt="image2"
            className="rounded-lg border-8 border-white shadow-2xl"
            height={500}
            src="https://boxlifemagazine.com/wp-content/uploads/2023/08/dumbbell-back-exercises.png"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
