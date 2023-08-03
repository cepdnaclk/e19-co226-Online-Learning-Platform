import React from 'react';

const Card = ({ imageSrc, subTitle, title, greenText, buttonText }) => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow text-black border-2 border-transparent hover:border-blue-500">
            <img src={imageSrc} className="rounded-t-lg" />

            <div className="px-5 pb-5 pt-2">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {title}
                </h5>

                <div className="flex items-center mt-2.5 mb-5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded">
                        {subTitle}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-green-600">{greenText}</span>
                    <span className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {buttonText}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;