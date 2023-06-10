"use client";
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchRecruits } from "@/store/recruits";
import RecruitList from "@/components/recruitList"

export default function Home() {
  const [pageNum, setPageNum] = useState(1);

  const { recruits, loading, stopFetching } = useSelector((state: RootState) => state.recruits);

  const dispatch = useDispatch<AppDispatch>();
  
  useEffect(() => {
    if (stopFetching) return;
    dispatch(fetchRecruits(pageNum));
  }, [dispatch, pageNum, stopFetching]);

  useEffect(() => {
    document.addEventListener("scroll", handleScrollEvent);

    // remove event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  const increasePageNum = () => {
    setPageNum((prev) => prev + 1);
  }

  const handleScrollEvent = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // Add throttling for scroll event
    
    if (scrollTop + clientHeight >= scrollHeight) {
      increasePageNum();
    }
  };

  return (
    <div className="mt-6">
      <div>
        <RecruitList recruits={recruits} />
        {loading && <div className="text-center p-6">Loading...</div>}
      </div>
    </div>
  );
}
