/* eslint-disable @next/next/no-img-element */
import { changeI18n } from '@/locales';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useMemo } from 'react';

export const NarBar = (props) => {
  console.log('props', props);

  const menu = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
  ];

  const getPathRoute = useMemo(
    () => menu?.find((i) => i.path === props?.asPath),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props?.asPath],
  );

  return (
    <>
      <div className="flex flex-wrap place-items-center">
        <section className="relative mx-auto">
          {/* navbar */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen ">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a className="text-3xl font-bold font-heading">
                {/* <img class="h-9" src="logo.png" alt="logo"> */}
                <Link href="/"> Logo Here.</Link>
              </a>
              {/* Nav Links */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 ">
                {menu?.map?.((i) => {
                  return (
                    <li
                      key={i.path}
                      className={classNames(
                        'border-b-2  p-2',
                        getPathRoute?.path === i.path ? 'border-white' : 'border-none',
                      )}
                    >
                      <a className="hover:text-gray-200">
                        <Link href={i.path}>{i.name}</Link>
                      </a>
                    </li>
                  );
                })}
              </ul>
              {/* Header Icons */}
              <div className="hidden xl:flex items-center space-x-5">
                <button
                  type="button"
                  onClick={() => changeI18n('en')}
                  className=" py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => changeI18n('km')}
                  className="py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Khmer
                </button>
                <a className="hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
                  </span>
                </a>
                {/* Sign In / Register      */}
                <a className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 hover:text-gray-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* Responsive navbar */}
            <a className="xl:hidden flex mr-6 items-center" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
              </span>
            </a>
            <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </a>
          </nav>
        </section>
      </div>
      {/* Does this resource worth a follow? */}
      <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a
            title="Follow me on twitter"
            href="https://www.twitter.com/asad_codes"
            target="_blank"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
            />
          </a>
        </div>
      </div>
    </>
  );
};
