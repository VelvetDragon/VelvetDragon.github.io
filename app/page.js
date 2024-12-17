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
          <h1 className="text-xl font-bold transition-transform duration-300 ease-in-out hover:scale-110">
            Suwan Aryal
          </h1>
          <ul className="flex items-center">
            {/* <li>
              <BsFillMoonStarsFill
                //onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl"
              />
            </li> */}
            <li>
              <a
                className="bg-teal-400 text-white px-4 py-2 animate-glow-border rounded-md ml-8 shadow-md hover:opacity-90"
                href="https://drive.google.com/file/d/1gQ0cR1JLRG5jLmr9ZrGNmbHiCq07jjLm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10 text-center rounded-3xl shadow-lg">
          <div className="absolute top-0 left-10 w-16 h-16 bg-gray-700 rounded-full animate-bounce opacity-80"></div>
          <div className="absolute top-10 right-0 w-20 h-20 bg-gray-600 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 left-5 w-24 h-24 bg-gray-500 rounded-full animate-pulse"></div>

          <h2 className="text-5xl py-2 font-extrabold md:text-6xl text-white relative z-10">
            Suwan Aryal
          </h2>
          <p className="text-md py-5 leading-8 md:text-xl max-w-lg mx-auto text-white relative z-10 animate-fade-in">
            Passionate about <span className="text-teal-300">Data Analysis</span> and <span className="text-teal-300">Machine Learning</span>. Always eager to <span className="text-teal-300">learn and collaborate</span>!
          </p>

          <div className="relative mx-auto animate-border-glow bg-gradient-to-b from-white via-teal-500 to-teal-600 rounded-full w-80 h-80 mt-10 mb-10 overflow-hidden md:h-96 md:w-96 shadow-xl">
            <Image className="scale-125 rounded-full" src={tryImage} layout="fill" objectFit="cover" />
          </div>

          <div className="text-3xl md:text-5xl flex justify-center gap-4 md:gap-16 py-7 text-gray-600">
            <a
              href="https://www.instagram.com/s_.uwan/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 animate-float transition-colors"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.facebook.com/suwan.aryal.3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 animate-float transition-colors"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://github.com/VelvetDragon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 animate-float transition-colors"
            >
              <AiFillGithub />
            </a>
            <a
              href="mailto:aryalsuwan.2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400 animate-float transition-colors"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="relative py-16 bg-gray-900">

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute top-0 left-0 w-24 h-24 bg-gray-700 rounded-full opacity-30 animate-bubble"></div>
          <div className="absolute top-10 left-20 w-32 h-32 bg-gray-800 rounded-full opacity-20 animate-bubble"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-gray-700 rounded-full opacity-20 animate-bubble"></div>
        </div>

        <h3 className="text-4xl text-center font-extrabold mb-10 text-white relative z-10">My Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">

          <div className="bg-gray-800 text-center p-6 text-gray-200 rounded-xl hover:scale-105 transform transition duration-500 ease-in-out relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 text-white">Languages</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Python</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">JavaScript</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">C++</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">C#</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">SQL</span>
            </div>
          </div>

          <div className="bg-gray-800 text-center p-6 text-gray-200 rounded-xl hover:scale-105 transform transition duration-500 ease-in-out relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 text-white">Frontend Technologies</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">HTML</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">CSS</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Tailwind</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">React</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">React Native</span>
            </div>
          </div>

          <div className="bg-gray-800 text-center p-6 text-gray-200 rounded-xl hover:scale-105 transform transition duration-500 ease-in-out relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 text-white">Data Analysis</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Pandas</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Numpy</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Matplotlib</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Seaborn</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Plotly</span>
            </div>
          </div>

          <div className="bg-gray-800 text-center p-6 text-gray-200 rounded-xl hover:scale-105 transform transition duration-500 ease-in-out relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 text-white">Machine Learning</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Scikit-Learn</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">TensorFlow</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Keras</span>
            </div>
          </div>

          <div className="bg-gray-800 text-center p-6 text-gray-200 rounded-xl hover:scale-105 transform transition duration-500 ease-in-out relative overflow-hidden">
            <h4 className="text-2xl font-bold mb-4 text-white">Tools</h4>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Git</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Firebase</span>
              <span className="bg-teal-600 px-4 py-2 rounded-lg shadow-md text-base text-white">Jupyter Notebook</span>
            </div>
          </div>
        </div>
      </section>




      <section className="bg-gray-900 py-16">
        <h3 className="text-4xl py-1 mb-10 text-center font-bold text-white">Projects</h3>

        <div className="text-md py-5 leading-8 text-gray-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">


            {/* Emotional Disney */}
            <div
              className="relative  text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden  group cursor-pointer "
              onClick={() => window.open('https://github.com/VelvetDragon/disney-films-emotion-NLP', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300"> Emotional Disney </h4>
              <p className="text-white">Honors Research Project on emotion detection in different Disney Films</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/disney-films-emotion-NLP"
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
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Churn-Analysis-and-Prediction', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Customer Churn Analysis and Prediction</h4>
              <p className="text-white">Machine learning pipeline for predicting customer churn with Flask and SQL.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
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
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Sentiment-Analysis-Amazon-Reviews', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Sentiment Analysis on Amazon Reviews</h4>
              <p className="text-white">Sentiment analysis on product reviews using NLP techniques.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
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
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer "
              onClick={() => window.open('https://github.com/VelvetDragon/Flight-Ticket-Price-Prediction-Using-ML', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Airlines Ticket Fare Prediction</h4>
              <p className="text-white">Predictive model for airline ticket prices using regression algorithms.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
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

            {/* Password Strength Prediction */}
            <div
              className="relative text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden  group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/Password-Strength-Prediction-using-NLP', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Password Strength Prediction using NLP</h4>
              <p className="text-white">A system to predict password strength using NLP techniques and classification models.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
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

            {/* Sales Insights Dashboard */}
            <div
              className="relative justify-center text-center shadow-lg p-10 rounded-xl bg-gray-800 text-white overflow-hidden group cursor-pointer"
              onClick={() => window.open('https://github.com/VelvetDragon/sales-insights', '_blank')}
            >
              <h4 className="text-lg font-medium pb-4 text-teal-300">Sales Insights Dashboard Using Power BI</h4>
              <p className="text-white">Interactive dashboard to visualize sales data with Power BI and SQL.</p>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800 to-black flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <a
                  href="https://github.com/VelvetDragon/sales-insights"
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
        <p className="text-sm text-gray-600 dark:text-white"> © 2024 Suwan Aryal. All rights reserved. </p>
      </footer>
    </main>

  );
}
