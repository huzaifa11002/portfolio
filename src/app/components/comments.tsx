"use client"
import Image from "next/image";
import cardImg from "../../../public/main.jpeg"
import { useState } from "react";

const Comments = () => {

  interface commentSet {
    inputItem: string;
  }

  let [comment, setComment] = useState<commentSet[]>([]);
  let [commentInput, setCommnetInput] = useState("");

  function addComment() {
    setComment([...comment,({ inputItem: commentInput })])
    setCommnetInput("")
  }

  return (
    <>
      <div className='border-t-2 border-[#c4ef04]'>
        <h2 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-[#fff] font-bold text-center uppercase my-10 sm:text-start">Comments</h2>
        <div className='flex flex-col gap-10 w-full sm:w-9/12'>
          <div className='flex flex-col gap-5'>
            <div className="relative">
              <label className=" absolute z-1 text-[#c4ef04] -top-3 bg-[#232b2b] mx-4 px-1">Comment</label>
              <textarea value={commentInput} onChange={((e) => setCommnetInput(e.target.value))} className="w-full h-40 rounded p-3 text-white border-2 border-[#c4ef04] bg-transparent focus-visible:outline-none" placeholder="Add a comment..."></textarea>
            </div>
            <div className='flex justify-end'>
              <button onClick={addComment} className="w-fit text-[#232b2b] bg-[#c4ef04] font-bold rounded-3xl border-2 border-[#c4ef04] px-7 py-3 hover:text-[#c4ef04] hover:border-[#c4ef04] hover:bg-transparent float-right">Send</button>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {
              comment.map((items, i) => {
                return (
                  <div className="flex flex-col gap-3 bg-white rounded p-3" key={i}>
                    <div className="flex flex-row gap-3 items-center">
                      <Image src={cardImg} alt="profile-pic" className="w-10 h-10 rounded-full"></Image>
                      <h6>Huzaifa</h6>
                    </div>
                    <div>
                      <p className="text-sm">{items.inputItem}</p>
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Comments;