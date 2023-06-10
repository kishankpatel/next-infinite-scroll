"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home({recruits}: any) {


  return (
    <div className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-6 w-100 md:w-11/12 lg:w-9/12 m-auto">
        {recruits.map((recruit: any, index: number) => (
          <div
            key={`item-${index}`}
            className="bg-white border border-gray-200 rounded-lg hover:bg-gray-100"
          >
            <div className="relative shadow-sm">
              <Image
                src={recruit.image}
                alt="Banner"
                width={100}
                height={24}
                priority
                className="rounded-t-lg w-full h-44"
              />
              <Image
                src={`/icons/bookmark-${
                  recruit.bookmark ? "fill" : "light"
                }.svg`}
                alt="Banner"
                height={28}
                width={28}
                priority
                className="absolute top-4 right-4 z-10"
              />
            </div>
            <div className="content p-5 divide-y">
              <div className="pb-3">
                <div className="text-xl font-bold line-height-30 text-ellipsis truncate">
                  {recruit.title}
                </div>
                <div className="text-xs text-gray-500 text-ellipsis truncate" title={recruit.review}>
                  {recruit.review}
                </div>
              </div>
              <div className="py-3">
                <div className="flex items-center line-height-30 mb-2 text-base">
                  <Image
                    src={recruit.company.logo}
                    alt="Company logo"
                    width={24}
                    height={24}
                    className="rounded mr-2 h-6 border border-gray"
                  />
                  <div className="font-bold text-ellipsis truncate">{recruit.company.name}</div>
                  <div className="flex mx-2 font-bold">
                    <Image
                      src="/icons/star.svg"
                      alt="Star"
                      width={14}
                      height={14}
                      className="rounded-t-lg mr-1"
                    />
                    {recruit.company.grade}
                  </div>
                  <div className="text-gray-500">
                    ({recruit.company.grade_count})
                  </div>
                </div>
                <div className="text-gray-500 text-sm text-ellipsis truncate" title={recruit.review}>
                  {recruit.review}
                </div>
              </div>
              <div className="flex pt-3 text-ellipsis truncate">
                <Image
                  src="/icons/won.svg"
                  alt="Won"
                  width={14}
                  height={14}
                  className="rounded-t-lg mr-1"
                />
                <span className="text-sm">{recruit.appeal}</span>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}


