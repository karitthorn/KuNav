import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WebsiteCard from "./components/websiteCard";
import data from "@/public/data/website.json";
import { useState } from 'react';

type DropdownOption = 'All' | '#Official' | '#Community';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<DropdownOption>('All');
  const [searchQuery, setSearchQuery] = useState<string>(''); // New state for the search query

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const changeDropdownOption = (option: DropdownOption) => {
    setSelectedOption(option);
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-green-200 ">
        <Navbar />
        <div className="flex-grow items-center w-full flex flex-col p-2 justify-center">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            {/* ... */}
            {/* Search Input */}
            <form className="flex w-full justify-center items-center">
              <div className="relative w-full"> {/* Removed the outer 'flex' div */}
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="ค้นหา website"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Handle search input change
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </form>
          </div>
          <section className="flex flex-wrap w-full items-center justify-center mx-auto">
            {data
              .filter((item) => {
                if (selectedOption === 'All') {
                  return true;
                } else if (selectedOption === '#Official') {
                  return item.tag === 'official';
                } else if (selectedOption === '#Community') {
                  return item.tag === 'community';
                }
                return false;
              })
              .filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())) // Filter based on the search query
              .map((item, index) => (
                <div key={index} className="">
                  <WebsiteCard
                    websiteName={item.name}
                    description={item.description}
                    websiteTag={item.tag}
                    websiteURL={item.url}
                  />
                </div>
              ))}
          </section>
        </div>
        <div className="sticky bottom-0 md:pl-36 md:pr-36">
          <Footer />
        </div>
      </div>
    </>
  );
}
