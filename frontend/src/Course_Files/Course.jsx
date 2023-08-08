import React, { Component } from 'react'
import Footer from "../Navbar_Files/Footer";

function Course() {
   return (
      <>
      <div className='pb-20 p-5 select-none'>
         <div className='bg-blue-50 p-8 rounded-lg shadow-md h-1/2 flex w-full'>
           <div class=" h-full w-1/2"> 
             <h1 className='text-4xl bold'> Data Analytics Professional Certificate</h1>
                <div class='p-5'>
                <p class='py-5'>This is your path to a career in data analytics. <br></br>
                In this program, you`ll learn in-demand skills that will have you job-ready in less than 6 months.<br></br>
                No degree or experience required.<br></br>
                </p>

                <button
                class="middle none center rounded-lg bg-blue-500 py-3.5 px-10 font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                >
                Enroll
               </button>

                </div>
           </div>
           <div class="bg-blue-200 p-4 rounded-md h-full w-1/2 flex-grow">
             <div class='text-xl bold'>
               Intermediate level
             </div>
             <div class='text-l'>Recommended experience</div>
             <div class='text-m'>A working knowledge of Python and Data Analysis and Visualization techniques. A minimum of high school math.    </div>
           </div>

         </div>
         
         <div class='h-1/2 pl-10 py-8'>
         <h3  class='text-2xl bold py-3'>What you'll learn</h3>
         <ul>
            <li>Learn firsthand the procedures and methods that a junior or associate data analyst employs on a daily basis.</li>
            <li>Learn how to prepare and organize data for analysis, and how to use spreadsheets, SQL, and R programming to finish analysis and computations.</li>
            <li>Learn the fundamental tools and techniques of analysis, such as spreadsheets, SQL, R programming, and Tableau.</li>
            <li>Learn how to display data insights in dashboards, presentations, and popular visualization platforms.</li>
         </ul>

         <h3 class='text-2xl bold py-3'>Skills you'll gain</h3>
         <ul>
            <li>Data Analysis</li>
            <li>Data Visualization (DataViz)</li>
            <li>case study</li>
            <li>Spreadsheet</li>
            <li>Data Collection</li>
            <li>SQL</li>
         </ul>

         

         </div>
      </div>
      <Footer />   
      </>

   )
}

export default Course