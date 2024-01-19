const WhyUsSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-200 py-8 my-12">
      <h2 className="text-2xl md:text-4xl font-semibold text-slate-800 mb-8">
        Why 100xdevs?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center px-4 lg:px-36 mb-3 md:mb-6">
        <div className="w-full flex flex-col items-start text-xl md:text-2xl font-semibold text-neutral-700 mb-2">
          <h3>Learn, build, and ship —</h3>
          <h3>without the fear of missing out.</h3>
        </div>

        <div className="w-full text-lg md:text-xl text-neutral-600 mb-2">
          <h3>
            No compromises. With 100xdevs, you don&apos;t have to choose between
            different tutors and random tutorials. Get the power of building
            production-ready applications.
          </h3>
        </div>

        
      </div>
    </div>
  );
};

export default WhyUsSection;
