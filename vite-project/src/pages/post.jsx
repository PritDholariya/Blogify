import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';

export default function Post(){
    return(
        <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Article 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                The Daily Dichotomies of Product Leadership
              </h2>
              <p className="text-gray-600">
                Product leaders are empowered to take on a lot of responsibility
                for the feature, function or domain area assigned to them. Yet,
                it is far more common for Product Leaders to doubt their own
                capabilities and decision-making skills. Some reasons discussed
                previously.
              </p>
              <Link
                to="/article1" // Replace with the actual article link
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Article 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                The Daily Dichotomies of Product Leadership
              </h2>
              <p className="text-gray-600">
                Product leaders are empowered to take on a lot of responsibility
                for the feature, function or domain area assigned to them. Yet,
                it is far more common for Product Leaders to doubt their own
                capabilities and decision-making skills. Some reasons discussed
                previously.
              </p>
              <Link
                to="/article2" // Replace with the actual article link
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Article 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://miro.medium.com/v2/resize:fit:828/0*zDF2-6_9zdXA5f0H"
              alt=""
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                The Daily Dichotomies of Product Leadership
              </h2>
              <p className="text-gray-600">
                Product leaders are empowered to take on a lot of responsibility
                for the feature, function or domain area assigned to them. Yet,
                it is far more common for Product Leaders to doubt their own
                capabilities and decision-making skills. Some reasons discussed
                previously.
              </p>
              <Link
                to="/article3" // Replace with the actual article link
                className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}