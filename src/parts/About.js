/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

import about from 'assets/images/AboutUs.jpg';

export default function About() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col mCt-8 justify-center">
        <Fade bottom>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Rumah School</h1>
          <p className="font-light text-xl text-gray-400 text-center mb-10">About Us</p>
        </Fade>
        <Fade bottom delay={300 * 1}>
          <div className="flex justify-center xl:mb-6">
            <img src={about} alt="Project" className="flex w-4/5 sm:w-4/6" />
          </div>
        </Fade>
        <Fade bottom delay={300 * 1}>
          <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
            <h1 className="text-3xl text-theme-blue font-bold mb-3">Company History</h1>
            <p className="font-light text-lg text-gray-400 text-justify">
              Rumah school has been established since 2020 with a focus on high school materials. Located in Nongsa Batam makes the location strategic. It has been recognized and inaugurated by the mayor of Batam, Mr. Rudi, who came
              directly to sign the inauguration and groundbreaking documents. In 2023 rumah school has opened new classes for junior high school and elementary school aiming to expand the scope of education to students in need.
            </p>
          </div>
          <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
            <h1 className="text-3xl text-theme-blue font-bold mb-3">Culture</h1>
            <p className="font-light text-lg text-gray-400 text-justify">
              At Rumah School, learning is highly interactive between student and teacher. To foster closeness to students, the teachers take different approaches to each student, because we know that each student has strengths and has some
              things that can be developed further. With no homework but instead group work, students can help each other to teach what they know in order to develop a deeper understanding.
            </p>
          </div>
          <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
            *Rumah School not open registration yet
            <br />
            Estimation date open :
            <Button type="link" href="" target="_blank" className="text-theme-purple" isExternal>
              Agustus 2024
            </Button>
          </p>
        </Fade>
      </div>
    </section>
  );
}
