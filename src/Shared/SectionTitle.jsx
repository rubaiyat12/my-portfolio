
const SectionTitle = ({heading}) => {
    return (
        <div className="mt-16">
            <h1 className='md:text-3xl text-2xl text-center text-gray-200 pt-0 pb-10 font-semibold'><span className='border-l-indigo-700 border-l-8 p-5 rounded-full'></span> {heading} <span className='border-r-indigo-700 border-r-8 p-5 rounded-full'></span></h1>


        </div>
    );
};

export default SectionTitle;