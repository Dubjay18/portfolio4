
import HorizontalScroll from "react-scroll-horizontal";



export function SmoothScroll() {
    const child = { width: `90vw`, height: `600px` };
    return (
    
        <HorizontalScroll>
        <div className=" card items-center rounded-md md:px-10 py-20" style={child}>
        <div className="flex w-full justify-center">
          <div className=" text-white  ">
            <h2 className="font-poppins font-medium text-secondary  md:text-2xl">
              React Js Developer{' '}
              <span className="text-lime-400 underline !decoration-dashed">
                @KodeCamp
              </span>
            </h2>
            <p className="font-poppins my-5">Internship(Remote)</p>
            <p className="font-poppins my-5">August 2021 - Dec 2021</p>
            <p className="font-poppins my-5">Mar 2022 - Present</p>
            <div className="exp forest:text-white  lemonade:text-accent font-poppins  w-fit">
              <ul>
                <li className="">
                  Worked with developers to build a learning managment system
                  for kodecamp
                </li>
                <li>
                  Built a variety of web apps with Apis, Javascript, Html, React
                  js, Firebase.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="card items-center rounded-md px-10 py-20" style={child}>
        <div className="flex w-full justify-center">
          <div className="mx-10 text-white  ">
            <h2 className="font-poppins font-medium text-secondary  md:text-2xl">
              Frontend Developer{' '}
              <span className="text-lime-400 underline decoration-dashed">
                @HNGi8
              </span>
            </h2>
            <p className="font-poppins my-5">Internship</p>
            <p className="font-poppins my-5">August 2021 - Oct 2021</p>
            <div className="exp forest:text-white  lemonade:text-accent font-poppins  w-fit">
              <ul>
                <li className="">
                  Worked with a large team of developers to build the company
                  files plugin of a "Slack-like" app called Zuri-chat.
                </li>
                <li>
                  Worked with a variety of tools Javascript React js, Next js,
                  SPA, Node js.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="card items-center rounded-md px-10 py-20" style={child}>
        <div className="flex w-full justify-center">
          <div className="mx-10 text-white  ">
            <h2 className="font-poppins font-medium text-secondary  md:text-2xl">
              Software Engineer{' '}
              <span className="text-lime-400 underline decoration-dashed">
                @alx_africa
              </span>
            </h2>
            <p className="font-poppins my-2">Internship</p>
            <p className="font-poppins my-2">Feb 2022 - Present</p>
            <div className="exp forest:text-white  lemonade:text-accent font-poppins  w-fit">
              <ul>
                <li className="">
                  Learnt how to write C programs, Bash scripts, Python programs.
                </li>
                <li>
                  Worked with other developers on Software engineering projects
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </HorizontalScroll>
    
    );
}
