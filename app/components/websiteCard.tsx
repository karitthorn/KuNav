"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
interface WebsiteCardProps {
  websiteName: string;
  description: string;
  websiteTag: string;
  websiteURL: string;
}

export default function WebsiteCard({ websiteName , description, websiteTag,websiteURL }: WebsiteCardProps) {
  const [tagcss, setTagcss] = useState("")

  useEffect(()=>{
    if (websiteTag == "official"){
      setTagcss("inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ")
    }else if (websiteTag == "community"){
      setTagcss("inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ")
    }
    console.log(tagcss)
  })


  return (
    <>
      <div className="max-w-sm p-6 m-3 bg-white border border-gray-200 rounded-lg shadow-lg  md:w-96 w-80  md:min-h-[218px]">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {websiteName}
          </h5>
        </a>
        <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-2 mb-3">
        <span className={tagcss}>
          #{websiteTag}
        </span>

        </div>
        <Link
          href={websiteURL}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>

      </div>
    </>
  );
}
