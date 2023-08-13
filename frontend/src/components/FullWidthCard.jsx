import React from 'react'

//Import Images
import generalImage from './images/courseImages/default.jpg'
import ProgrammingImage from './images/courseImages/programming.jpg'
import aiImage from './images/courseImages/ai.jpg'
import LawImage from './images/courseImages/law.jpg'
import MachineLearning from './images/courseImages/machineLearning.jpg'
import WebImage from './images/courseImages/web.jpg'
import HistoryImage from './images/courseImages/history.jpg'


const FullWidthCard = ({ courseName, courseCategory, courseDescription, price, tutorName }) => {

    let imageSource;
    switch (courseCategory) {
        case "Programming":
            imageSource = ProgrammingImage;
            break;
        case "Artificial Intelligence":
            imageSource = aiImage;
            break;
        case "History":
            imageSource = HistoryImage;
            break;
        case "Machine Learning":
            imageSource = MachineLearning;
            break;
        case "Law":
            imageSource = LawImage;
            break;
        case "Web Development":
            imageSource = WebImage;
            break;
        default:
            imageSource = generalImage;
            break;
    }

    return (

        <a href='#' className="my-5 sm:max-w-full sm:flex">
            <div
                className="h-72 sm:h-auto sm:w-72 flex-none bg-cover rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl text-center overflow-hidden"
                style={{ backgroundImage: `url(${imageSource})` }} >
            </div>

            <div className="w-full bg-gradient-to-r from-gray-100 to-gray-300 rounded-b-2xl sm:rounded-b-none sm:rounded-r-2xl p-4 flex flex-col justify-between leading-normal">
                <div className="mb-2">
                    <div className="text-gray-900 font-bold text-3xl">
                        {courseName}
                    </div>
                    <p className="pl-3 text-xl text-gray-600 flex items-center my-1">
                        👨‍🏫 Published By: {tutorName}
                    </p>
                    <p className="text-gray-700 text-base mt-4 leading-relaxed">
                        {courseDescription}
                    </p>

                </div>

                <div className="flex items-center">
                    <div className="text-sm ">
                        <p className="pl-5 text-xl my-1 text-gray-900 ">
                            Course Category: {courseCategory}
                        </p>
                        <p className="pl-5 text-xl my-3">
                            Price: <span> </span>
                            <span className='text-green-600'>
                                {price}
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </a>


    );
}

export default FullWidthCard