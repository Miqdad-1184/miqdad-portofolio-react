const Experience = ({ text }) => {
  return (
    <div className='py-10 px-4 md:px-30 bg-[#0a192f] flex flex-col items-center'>
      <h1 className='font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent text-center text-2xl md:text-3xl mb-8'>{text.heading}</h1>
      <div className='flex flex-wrap justify-center gap-8 w-full max-w-4xl'>
        {text.items.map((item, index) => (
          <div key={index} className='w-full max-w-lg bg-[#112240] border border-[#233554] rounded-3xl p-6 shadow-xl'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5'>
              <div>
                <h3 className='text-xl font-semibold text-white'>{item.role}</h3>
                <p className='text-sm text-[#8892b0] mt-1'>{item.company}</p>
              </div>
              <span className='inline-flex rounded-full bg-gradient-to-r from-purple-700 to-blue-700 px-4 py-2 text-sm font-medium text-white'>
                {item.period}
              </span>
            </div>
            <p className='text-[#a8b2d1] mb-5 text-justify'>{item.description}</p>
            <ul className='space-y-3 text-[#ccd6f6]'>
              {item.points.map((point, pointIndex) => (
                <li key={pointIndex} className='grid grid-cols-[auto_1fr] gap-3 text-justify'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0' />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;