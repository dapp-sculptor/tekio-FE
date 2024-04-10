/* eslint-disable @next/next/no-img-element */

const ImgBackground = () => {
  return (
    <div className="w-full xl:items-center xl:flex xl:justify-center max-h-screen">
      <div
        className="absolute xl:w-[574px] w-[340px] h-[574px] xl:top-[150px] top-[135px] xl:left-[581px] left-[0] bg-[#FFC012]
      filter blur-[200px] rounded-full opacity-30 -z-[9997]"
      />
      <div
        className="absolute xl:w-[757px] h-[557px] w-[340px] xl:top-[200px] top-[340px] xl:left-[69px] -left-[138px] bg-[#006C87]
      filter blur-[200px] rounded-full opacity-50 -z-[9998]"
      />
      <div
        className="absolute xl:w-[758px] w-[340px] h-[558px] top-[100px] right-[200px] bg-[#8B6BF1]
      filter blur-[200px] rounded-full opacity-50 -z-[9999]"
      />
      <div className="absolute filter rounded-full -z-[9997] md:top-[200px] top-[160px] left-0 right-0 flex items-center justify-center">
        <img
          src="/imgs/centerMark.png"
          className="w-[370px] -z-[9998] h-full md:opacity-20 opacity-30 mr-[20px]"
          alt="CenterMark"
        />
      </div>
    </div>
  );
};

export default ImgBackground;