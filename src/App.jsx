function App() {
  return <div className="App">
<article className="cv max-w-[1100px] mx-auto p-4 md:p-8">
   {/*Profile*/}
  <div className="grid grid-cols-12 gap-4 mb-4">
    <section className="col-span-12 md:col-span-4 xl:col-span-3">
      <img
        src="https://i.ibb.co/2qsyxjQ/1.jpg"
        className="w-full h-full object-cover rounded-tr-3xl rounded-bl-3xl mb-4"
      />
    </section>
    <section className="col-span-12 md:col-span-8 xl:col-span-9 py-4 md:px-8">
       {/*About*/}
      <div>
        <h1 className="text-5xl md:text-7xl">Hello! I'm</h1>
        <h1 className="text-5xl md:text-7xl font-bold">Alvaro</h1>
        <p className="md:text-2xl text-gray-500">Front-End Developer</p>
      </div>
      <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-2">
        Profile
      </h3>
      <p className="text-gray-500">
      Who is Alvaro? an enthusiastic technology boy who is 19 years old. I made the decision to research the world of coding at the beginning of last year out of curiosity, and ever then, it has become my favorite pastime. I am a TOELF ITP certified level B1 English proeficieny and  enjoys taking on new programming challenges every day.
      </p>
    </section>
  </div>

  <div className="grid grid-cols-12 gap-4 mb-4">
    <section className="col-span-12 md:col-span-4 xl:col-span-3">
       {/*Education*/}
      <div className="bg-[#fbede0] rounded-tl-3xl p-8 mb-4">
        <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Education
        </h3>
        <div className="mb-6">
          <p className="text-gray-500 text-sm">2007 - 2020</p>
          <h4 className="font-medium">High School</h4>
          <p className="text-gray-500 text-sm">
            Ciudad Escolar Comfenalco
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">2021 - 2022</p>
          <h4 className="font-medium">English A2-B1 Course</h4>
          <p className="text-gray-500 text-sm">
            Colombo Americano English Center
          </p>
        </div>
      </div>
       {/*Contact*/}
      <div className="bg-[#fbebeb] rounded-tr-3xl p-8">
        <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Contact
        </h3>
        <div className="mb-6">
          <h4 className="font-medium">Celular</h4>
          <p className="text-gray-500 text-sm">+57 3015899359</p>
        </div>
        <div className="mb-6">
          <h4 className="font-medium">Email</h4>
          <p className="text-gray-500 text-sm">alvaroxavierarroyo@icloud.com</p>
        </div>
        <div>
          <h4 className="font-medium">Address</h4>
          <p className="text-gray-500 text-sm">Barrio Los Calamares Cartagena de Indias,</p>
          <p className="text-gray-500 text-sm">Colombia</p>
        </div>
      </div>
    </section>
    <section className="col-span-12 md:col-span-8 xl:col-span-9">
       {/*Skills*/}
      <div className="bg-[#f8f3ef] rounded-tl-3xl rounded-br-3xl p-8 mb-4">
        <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
          Skills
        </h3>
        <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
          <div className="text-gray-500 text-sm w-full md:w-[30%]">
            <p>Tools</p>
            <p>Latest Versions</p>
          </div>
          <div className="w-full md:w-[70%]">
            <h4 className="font-semibold">Javascript ES6</h4>
            <p className="text-gray-500 text-sm">
             HTML5, CSS3, AJAX, JSON, JSX, Basic Typescript
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full mb-4">
          <div className="text-gray-500 text-sm w-full md:w-[30%]">
            <p>Frameworks and Libraries</p>
            <p>Latest Versions</p>
          </div>
          <div className="w-full md:w-[70%]">
            <h4 className="font-semibold">Tailwind CSS</h4>
            <p className="text-gray-500 text-sm">
              Axios, React Router V6, React Query, Basic Next JS
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="text-gray-500 text-sm w-full md:w-[30%]">
            <p>Version Control and repositories</p>
          </div>
          <div className="w-full md:w-[70%]">
            <h4 className="font-semibold">Git</h4>
            <p className="text-gray-500 text-sm">
              Github
            </p>
          </div>
        </div>
      </div>
       {/*Additional Skills*/}
      <div className="bg-[#fbede0] rounded-tr-3xl rounded-bl-3xl p-8">
        <h3 className="relative text-xl font-semibold py-4 tracking-[4px] before:absolute before:w-10 before:h-[2px] before:bg-gray-900 before:left-0 before:bottom-0 mb-6">
         Additional Skills
        </h3>
        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-10 mb-4">
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <span>Photoshop</span>{" "}
            <div className="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <span>Excel</span>{" "}
            <div className="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <span>FL Studio</span>{" "}
            <div className="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row :items-center gap-2 lg:gap-10">
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <span>Ilustrator</span>{" "}
            <div className="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <span>Power Point</span>{" "}
            <div className="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
          <div className="flex items-center justify-between lg:justify-start gap-4">
            <span>Sony Vegas 16</span>{" "}
            <div className="flex items-center gap-1">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="opacity-[.2]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="10"></circle>
                    </g>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</article>

  </div>;
}

export default App;
