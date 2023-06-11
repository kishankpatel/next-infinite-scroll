"use client";
import React from "react";
import RecruitCard from "@/components/recruitCard";

export default function RecruitList({ recruits }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9	p-6 w-100 md:w-11/12 lg:w-9/12 m-auto">
      {recruits.map((recruit: any, index: number) => (
        <RecruitCard recruit={recruit} key={`recruit-${index}`} />
      ))}
    </div>
  );
}
