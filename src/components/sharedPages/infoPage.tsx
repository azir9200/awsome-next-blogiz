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
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
          <p className="py-8 px-12 justify-center text-center text-2xl">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which do not look even slightly
            believable.{" "}
          </p>
        </div>

        <div className=" lg:flex justify-center  items-center gap-6 ">
          <Image
            alt="image1"
            className="rounded-lg border-8 border-white shadow-2xl"
            height={500}
            src="https://www.roblangimages.com/img-get/I0000KmAqQPatE7E/s/1200/I0000KmAqQPatE7E.jpg"
            width={500}
          />

          <Image
            alt="image2"
            className="rounded-lg border-8 border-white shadow-2xl"
            height={500}
            src="https://thumbs.dreamstime.com/z/handsome-muscular-mechanic-tool-sexy-work-75369582.jpg"
            width={500}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
