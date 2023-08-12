import React from 'react';

//Import Images
import generalImage from './images/courseImages/default.jpg'
import ProgrammingImage from './images/courseImages/programming.jpg'
import aiImage from './images/courseImages/ai.jpg'
import LawImage from './images/courseImages/law.jpg'
import MachineLearning from './images/courseImages/machineLearning.jpg'
import WebImage from './images/courseImages/web.jpg'
import HistoryImage from './images/courseImages/history.jpg'

const Card = ({ name, category, price, buttonText }) => {

    let imageSource;
    switch (category) {
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
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black border-2 border-transparent hover:border-blue-500">
            <img src={imageSource} className="rounded-t-lg" />

            <div className="px-5 pb-5 pt-2">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {name}
                </h5>

                <div className="flex items-center mt-2.5 mb-5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                        {category}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-green-600">{price}</span>
                    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;