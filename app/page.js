"use client";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import tryImage from "../public/me.jpg";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <main className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"} px-10 md:px-20 lg:px-40`}>


      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl transition-transform duration-300 ease-in-out hover:scale-110">Suwan Aryal</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="https://drive.google.com/file/d/1-gn3HF3zrthiK6BBPmp47UE5P_zqLOC2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="relative bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500 py-10 text-center rounded-3xl">
          {/* Floating Graphics */}
          <div className="absolute top-0 left-10 w-16 h-16 bg-teal-400 rounded-full animate-bounce opacity-75"></div>
          <div className="absolute top-10 right-0 w-20 h-20 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 left-5 w-24 h-24 bg-indigo-400 rounded-full animate-pulse"></div>

          <h2 className="text-5xl py-2 font-extrabold md:text-6xl text-white relative z-10">
            Suwan Aryal
          </h2>
          <p className="text-md py-5 leading-8 md:text-xl max-w-lg mx-auto text-white relative z-10 animate-fade-in">
            Passionate about <span className="text-teal-300">Data Analysis</span> and <span className="text-teal-300">Machine Learning</span>. Always eager to <span className="text-teal-300">learn and collaborate</span>!
          </p>

          {/* Zigzag moving circular image */}
          <div className="relative mx-auto bg-gradient-to-b from-white via-teal-500 to-teal-600 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 animate-zigzag">
            <Image className="scale-125 rounded-full" src={tryImage} layout="fill" objectFit="cover" />
          </div>

          <div className="text-3xl md:text-5xl flex justify-center gap-4 md:gap-16 py-7 text-gray-600">

            <a
              href="https://www.instagram.com/su._.one/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/suwan.aryal.3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://github.com/VelvetDragon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              <AiFillGithub />
            </a>
            <a
              href="mailto:aryalsuwan.2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-600 transition-colors"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16">

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute top-0 left-0 w-24 h-24 bg-teal-300 rounded-full opacity-50 animate-bubble"></div>
          <div className="absolute top-10 left-20 w-32 h-32 bg-blue-300 rounded-full opacity-40 animate-bubble"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-300 rounded-full opacity-30 animate-bubble"></div>
        </div>

        <h3 className="text-4xl text-center font-extrabold mb-10 relative z-10">My Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-center p-6 text-white dark:bg-gray-900 rounded-xl hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-white rounded-full blur-lg"></div>
            <h4 className="text-2xl font-bold mb-4 text-teal-300">Languages</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              <span className="bg-gradient-to-r from-teal-300 to-teal-500 px-4 py-2 rounded-lg shadow-md text-lg">Python</span>
              <span className="bg-gradient-to-r from-teal-300 to-teal-500 px-4 py-2 rounded-lg shadow-md text-lg">JavaScript</span>
              <span className="bg-gradient-to-r from-teal-300 to-teal-500 px-4 py-2 rounded-lg shadow-md text-lg">C++</span>
              <span className="bg-gradient-to-r from-teal-300 to-teal-500 px-4 py-2 rounded-lg shadow-md text-lg">C#</span>
              <span className="bg-gradient-to-r from-teal-300 to-teal-500 px-4 py-2 rounded-lg shadow-md text-lg">SQL</span>
            </div>
          </div>


          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-center p-6 text-white dark:bg-gray-900 rounded-xl hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-white rounded-full blur-lg"></div>
            <h4 className="text-2xl font-bold mb-4 text-indigo-300">Frontend Technologies</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 px-4 py-2 rounded-lg shadow-md text-lg">HTML</span>
              <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 px-4 py-2 rounded-lg shadow-md text-lg">CSS</span>
              <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 px-4 py-2 rounded-lg shadow-md text-lg">Tailwind</span>
              <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 px-4 py-2 rounded-lg shadow-md text-lg">React</span>
              <span className="bg-gradient-to-r from-indigo-300 to-indigo-500 px-4 py-2 rounded-lg shadow-md text-lg">React Native</span>
            </div>
          </div>


          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-center p-6 text-white dark:bg-gray-900 rounded-xl hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-white rounded-full blur-lg"></div>
            <h4 className="text-2xl font-bold mb-4 text-purple-300">Data Analysis</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Pandas</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Numpy</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Matplotlib</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Seaborn</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Plotly</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Tableau</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">PowerBI</span>
              <span className="bg-gradient-to-r from-purple-300 to-purple-500 px-4 py-2 rounded-lg shadow-md text-lg">Excel</span>
            </div>
          </div>


          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-center p-6 text-white dark:bg-gray-900 rounded-xl hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-white rounded-full blur-lg"></div>
            <h4 className="text-2xl font-bold mb-4 text-pink-300">Machine Learning</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              <span className="bg-gradient-to-r from-pink-300 to-pink-500 px-4 py-2 rounded-lg shadow-md text-lg">Scikit-Learn</span>
              <span className="bg-gradient-to-r from-pink-300 to-pink-500 px-4 py-2 rounded-lg shadow-md text-lg">TensorFlow</span>
              <span className="bg-gradient-to-r from-pink-300 to-pink-500 px-4 py-2 rounded-lg shadow-md text-lg">Keras</span>
            </div>
          </div>


          <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-center p-6 text-white dark:bg-gray-900 rounded-xl hover:scale-110 transform transition duration-500 ease-in-out relative overflow-hidden">
            <div className="absolute inset-0 bg-opacity-20 bg-white rounded-full blur-lg"></div>
            <h4 className="text-2xl font-bold mb-4 text-yellow-300">Tools</h4>
            <div className="flex justify-center gap-6 flex-wrap">
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-2 rounded-lg shadow-md text-lg">Git</span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-2 rounded-lg shadow-md text-lg">Firebase</span>
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 px-4 py-2 rounded-lg shadow-md text-lg">Jupyter Notebook</span>
            </div>
          </div>
        </div>
      </section>



      <section >

        <h3 className="text-4xl py-1 text-center font-bold">Projects</h3>
        <div className={`text-md py-5 leading-8 text-gray-800 dark:text-gray-300`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Potato Disease Classification */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/your-potato-repo-link', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4">Potato Disease Classification Using CNN</h4>
              <p>A project to classify potato diseases using CNNs, FastAPI, TensorFlow Lite, and GCP.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/your-potato-repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-white"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            {/* Password Strength Prediction */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Password-Strength-Prediction-using-NLP', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4">Password Strength Prediction using NLP</h4>
              <p>A system to predict password strength using NLP techniques and classification models.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Password-Strength-Prediction-using-NLP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-white"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            {/* Customer Churn Analysis */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gradient-to-r from-yellow-400 to-red-500 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Churn-Analysis-and-Prediction', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4">Customer Churn Analysis and Prediction</h4>
              <p>Machine learning pipeline for predicting customer churn with Flask and SQL.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Churn-Analysis-and-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-white"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            {/* Sentiment Analysis */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-500 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Sentiment-Analysis-Amazon-Reviews', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4">Sentiment Analysis on Amazon Reviews</h4>
              <p>Sentiment analysis on product reviews using NLP techniques.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Sentiment-Analysis-Amazon-Reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-white"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            {/* Airline Ticket Fare Prediction */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Flight-Ticket-Price-Prediction-Using-ML', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4">Airlines Ticket Fare Prediction</h4>
              <p>Predictive model for airline ticket prices using regression algorithms.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/Flight-Ticket-Price-Prediction-Using-ML"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-white"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>

            {/* Sales Insights Dashboard */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gradient-to-r from-teal-500 to-green-600 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/your-sales-repo-link', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4">Sales Insights Dashboard Using Power BI</h4>
              <p>Interactive dashboard to visualize sales data with Power BI and SQL.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/your-sales-repo-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-5xl text-white"
                >
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-10 text-center">
        <p className="text-sm text-gray-600 dark:text-white">© 2024 Suwan Aryal. All rights reserved.</p>
      </footer>
    </main>

  );
}
