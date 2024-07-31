import { useState,useRef } from 'react';
import {FaSearch, FaTasks,  FaUserTie, FaLaptopCode, FaBriefcase, FaHospital, FaChartLine,FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const [searchType, setSearchType] = useState<'job' | 'candidate'>('job');
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      if (direction === 'left') {
        scrollRef.current.scrollLeft -= 300;
      } else {
        scrollRef.current.scrollLeft += 300;
      }
    }
  };
  return ( 
    <div className="min-h-screen">
      <header className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg shadow">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-700">JobPortal</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            {/* <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a> */}
            <a href="/jobposting" className="text-blue-600 hover:text-blue-800">Post a Job</a>
            <a href="#" className="text-green-600 hover:text-green-800">Want a Job</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white">Your Dream Job is Waiting</h2>
          <p className="mt-4 text-gray-100">We have 850,000 great job offers you deserve!</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8 bg-opacity-80 backdrop-filter backdrop-blur-md">
          <div className="flex justify-center mb-4">
            <button
              className={`px-6 py-2 ${searchType === 'job' ? 'bg-blue-700 text-white' : 'bg-gray-200'} rounded-l-lg`}
              onClick={() => setSearchType('job')}
            >
              Find a Job
            </button>
            <button
              className={`px-6 py-2 ${searchType === 'candidate' ? 'bg-blue-700 text-white' : 'bg-gray-200'} rounded-r-lg`}
              onClick={() => setSearchType('candidate')} 
            >
              <a href="/jobposting">
              Find a Candidate
              </a>
            </button>
          </div>

          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="e.g. Graphic, Web Developer"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Category"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button className="px-6 py-3 bg-blue-700 text-white rounded-lg">Search</button>
          </div>
        </div>

        <div className="mt-12 ">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Explore Jobs by Category</h3>
          <div className="relative flex items-center">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 z-10 p-2 bg-blue-700 text-white rounded-full shadow-lg"
            >
              <FaArrowLeft size={24} />
            </button>
            <div
              ref={scrollRef}
              className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4 px-8 ml-5"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaLaptopCode className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Technology</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaBriefcase className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Business</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaHospital className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Healthcare</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaChartLine className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Finance</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaLaptopCode className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Technology</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaBriefcase className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Business</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaHospital className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Healthcare</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaChartLine className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Finance</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaLaptopCode className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Technology</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaBriefcase className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Business</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaHospital className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Healthcare</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaChartLine className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Finance</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaLaptopCode className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Technology</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaBriefcase className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Business</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaHospital className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Healthcare</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaChartLine className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Finance</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaLaptopCode className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Technology</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaBriefcase className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Business</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaHospital className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Healthcare</h4>
              </div>
              <div className="flex flex-col items-center scroll-snap-align-center">
                <FaChartLine className="text-blue-700" size={50} />
                <h4 className="mt-2 text-lg font-semibold text-gray-700">Finance</h4>
              </div>
              {/* Add more categories as needed */}
            </div>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 z-10 p-2 bg-blue-700 text-white rounded-full shadow-lg"
            >
              <FaArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <div className="text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6">
            <FaSearch className="mx-auto text-blue-700" size={50} />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Search Millions of Jobs</h3>
          </div>
          <div className="text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6">
            <FaTasks className="mx-auto text-blue-700" size={50} />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Easy To Manage Jobs</h3>
          </div>
          <div className="text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6">
            <FaTasks className="mx-auto text-blue-700" size={50} />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Top Careers</h3>
          </div>
          <div className="text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-md rounded-lg p-6">
            <FaUserTie className="mx-auto text-blue-700" size={50} />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Search Expert Candidates</h3>
          </div>
        </div>
        
        
         
      </main>
    </div>
  );
};

export default Dashboard;
