const Curriculum = () => {
  return (
    <div className="bg-[#fafafa] dark:bg-[#090a22]">
      <div className="lg:px-10 px-6 py-36 container mx-auto lg:gap-10 gap-20 grid lg:grid-cols-12 relative">
        {/* left */}
        <div className="lg:col-span-5 lg:sticky lg:self-start top-36">
          <h1 className="text-4xl font-semibold pt-2 dark:text-white pb-7">
            What You Will Learn In of <br className="xl:block hidden" />
            <span className="bg-gradient-to-r from-[#3492f1] to-[#44d285] bg-clip-text text-transparent">
              This Course!
            </span>
          </h1>

          <p className="pb-10">
            In this comprehensive course, you’ll build all the essential skills
            to become a Junior Full Stack Web Developer. You’ll begin with core
            web foundations, learning HTML, CSS, Chrome DevTools, VS Code, Git &
            GitHub, along with top deployment tools like Vercel and Render.
            Tailwind CSS will enable you to create responsive UIs with ease,
            while JavaScript and TypeScript will strengthen your grasp of
            programming concepts and modern development practices.
            <br />
            <br />
            The course progresses into advanced frontend and backend topics.
            You’ll dive into React, Redux, ES6, DOM manipulation, and JSON,
            while learning API integration, authentication workflows, effective
            debugging techniques, and working with popular UI libraries like
            DaisyUI, Next UI, and shadcn UI to build polished, modern
            interfaces.
            <br />
            <br />
            You’ll also gain backend expertise with Node.js and Express.js,
            covering RESTful APIs, middleware, routing, and MongoDB with
            Mongoose for efficient database handling. You’ll implement secure
            JWT-based authentication, role-based access control, Firebase
            integration, and CORS handling, while managing state using Axios or
            Fetch along with global state management tools.
            <br />
            <br />
            Finally, the course wraps up with job interview preparation and
            freelancing guidance, equipping you with the confidence and
            practical insights needed to launch your career successfully as a
            web developer.
          </p>

          <button className="btn text-base h-12 z-10 bg-[#006fee] text-white border-none shadow-2xl shadow-[#0066db] font-normal px-10 rounded-full">
            Interested
          </button>
        </div>

        {/* right */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap gap-8 justify-center">
            {/* 1 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/html.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                HTML 5
              </h3>
              <p>
                The standard markup language for structuring and presenting
                content on the web, compatible across all browsers.
              </p>
            </div>

            {/* 2 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/css.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                CSS 3
              </h3>
              <p>
                A style sheet language that defines the look and layout of web
                documents, enhancing HTML with design and layout features.
              </p>
            </div>

            {/* 3 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/git-icon.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Git
              </h3>
              <p>
                A free and open-source version control system focused on speed,
                data integrity, and support for distributed, non-linear
                workflows.
              </p>
            </div>

            {/* 4 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/github.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                GitHub
              </h3>
              <p>
                A developer platform for storing, managing, and sharing code,
                combining Git's distributed version control with access control
                features.
              </p>
            </div>

            {/* 5 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/chrome-dev-logo-icon.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Chrome Devtools
              </h3>
              <p>
                A built-in suite of web development tools in Google Chrome that
                allows you to inspect HTML, monitor network activity, and
                troubleshoot issues.
              </p>
            </div>

            {/* 6 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/tailwindcss.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Tailwind CSS
              </h3>
              <p>
                A utility-first CSS framework packed with classes. Tailwind CSS
                is an open source CSS framework. The main feature of this
                library is that, unlike other CSS frameworks like Bootstrap.
              </p>
            </div>

            {/* 7 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/JavaScript-logo.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                JavaScript
              </h3>
              <p>
                A scripting language that allows for dynamic content creation,
                multimedia control, image animation, and a wide range of
                interactive web functionalities.
              </p>
            </div>

            {/* 8 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/ES6.jpg"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                ECMAScript
              </h3>
              <p>
                ECMAScript 6 (ES6) standardizes JavaScript, and this course
                covers features from ES6 to the latest version, enhancing your
                understanding of the language.
              </p>
            </div>

            {/* 9 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/json.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                JSON
              </h3>
              <p>
                JavaScript Object Notation (JSON) is a lightweight data format
                commonly used for storing and transporting data, especially when
                transmitting information from a server to a web page.
              </p>
            </div>

            {/* 10 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jsdom.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                DOM
              </h3>
              <p>
                The Document Object Model (DOM) is a programming interface that
                represents web documents as nodes and objects, enabling programs
                to modify the document's structure, style, and content.
              </p>
            </div>

            {/* 11 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/api.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                API Integration
              </h3>
              <p>
                The process of connecting different software applications via
                their APIs to enable data exchange and functionality sharing,
                enhancing overall system interoperability.
              </p>
            </div>

            {/* 12 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img src="https://www.hablu-programmer.com/img/ts.png" alt="" />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                TypeScript
              </h3>
              <p>
                A superset of JavaScript that adds static types, enabling better
                tooling and error checking for developing robust applications,
                while remaining fully compatible with JavaScript.
              </p>
            </div>

            {/* 13 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/react.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                React JS
              </h3>
              <p>
                A free, open-source JavaScript library for building user
                interfaces with a component-based architecture, maintained by
                Meta and a community of developers.
              </p>
            </div>

            {/* 14 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/redux.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Redux
              </h3>
              <p>
                A predictable state management library for JavaScript
                applications, often used with React, that helps manage
                application state in a consistent and centralized manner.
              </p>
            </div>

            {/* 15 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/nextjs.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Next.js
              </h3>
              <p>
                The process of connecting different software applications via
                their APIs to enable data exchange and functionality sharing,
                enhancing overall system interoperability.
              </p>
            </div>

            {/* 16 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/firebase.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Firebase
              </h3>
              <p>
                A platform developed by Google that provides backend services
                for web and mobile applications, including real-time databases,
                authentication, hosting, and cloud functions to streamline app
                development.
              </p>
            </div>

            {/* 17 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/node-js.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Node.js
              </h3>
              <p>
                A JavaScript runtime built on Chrome's V8 engine that allows for
                server-side scripting, enabling the development of scalable
                network applications and real-time web services.
              </p>
            </div>

            {/* 18 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/express-js.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Express.js
              </h3>
              <p>
                A minimal and flexible Node.js web application framework that
                provides a robust set of features for building web and mobile
                applications, including routing, middleware support, and
                simplified server management.
              </p>
            </div>

            {/* 19 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/mongodb.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                MongoDB
              </h3>
              <p>
                A NoSQL database that stores data in flexible, JSON-like
                documents, allowing for scalable and efficient data storage,
                retrieval, and processing in applications.
              </p>
            </div>

            {/* 20 */}
            <div className="border border-[#e4e8ec] dark:border-[#2b3045] rounded-2xl px-8 py-14 space-y-4 bg-[#fafafa] dark:bg-[#101829] hover:scale-[1.07] duration-300 xl:max-w-80 lg:max-w-96 max-w-80">
              <div className="h-16 w-16 mx-auto">
                <img
                  src="https://www.hablu-programmer.com/img/jfsd/mongoose.png"
                  alt=""
                />
              </div>
              <h3 className="text-xl font-bold text-center dark:text-white">
                Mongoose
              </h3>
              <p>
                An ODM (Object Data Modeling) library for MongoDB and Node.js
                that provides a straightforward way to model and manage data
                with schemas, enabling easy data validation and querying.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
