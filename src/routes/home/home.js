import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SubheaderDividers from "../../components/header";
import FloatingActionButtonSize from "../../components/floatingIcon/addIcon";
export function MainHome() {
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(() => {
    return false;
  });

  // useEffect(() => {
  //     window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //       setCurrentUrl(tabs[0].url);
  //     });
  //   }, []);

  useEffect(() => {
    window.chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var url = tabs[0].favIconUrl;
      console.log(url); // or do whatever you want with the url
      setCurrentUrl(url);
    });
  }, []);

  return (
    <div className="text-blue-600">
      <div>
        {(() => {
          const arr = [];
          for (let i = 0; i < 10; i++) {
            arr.push(
              <div>
                <div class="hover:bg-gray-200 mt-[1px] mb-[1px] flex items-start  border-blue-400 bg-white p-4 shadow-lg border-l-0 border-r-0 border-t-0">
                  <div className="flex justify-center content-center mt-auto mb-auto">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={"30px"}
                      height={"30px"}
                      viewBox="0 0 32 32"
                      id="website-coding"
                    >
                      <g data-name="4">
                        <path d="M10.667 21a1 1 0 0 1-.707-.293L7.293 18.041a1 1 0 0 1 0-1.415L9.96 13.959a1 1 0 1 1 1.414 1.415l-1.96 1.959 1.96 1.96A1 1 0 0 1 10.667 21zM21.333 21a1 1 0 0 1-.707-1.707l1.96-1.96-1.96-1.959a1 1 0 1 1 1.414-1.415l2.667 2.667a1 1 0 0 1 0 1.415L22.04 20.707A1 1 0 0 1 21.333 21zM14.666 21a1 1 0 0 1-.894-1.447l2.666-5.334a1 1 0 0 1 1.79.9l-2.666 5.333A1 1 0 0 1 14.666 21z"></path>
                        <path d="M29,28H3a1,1,0,0,1-1-1V3A1,1,0,0,1,3,2H29a1,1,0,0,1,1,1V27A1,1,0,0,1,29,28ZM4,26H28V4H4Z"></path>
                        <path d="M29 10H3A1 1 0 0 1 3 8H29a1 1 0 0 1 0 2zM20 7a1.487 1.487 0 0 1-.2-.02.636.636 0 0 1-.18-.06.782.782 0 0 1-.181-.09l-.149-.12a1.014 1.014 0 0 1 0-1.42 1.017 1.017 0 0 1 1.09-.21.568.568 0 0 1 .17.09c.059.04.11.08.16.12a1.014 1.014 0 0 1 0 1.42 1.169 1.169 0 0 1-.33.21A1 1 0 0 1 20 7zM23 7a1.487 1.487 0 0 1-.2-.02.636.636 0 0 1-.18-.06.782.782 0 0 1-.181-.09 1.7 1.7 0 0 1-.149-.12.933.933 0 0 1-.21-.33.943.943 0 0 1 0-.76 1.155 1.155 0 0 1 .21-.33A1 1 0 0 1 24 6a1.052 1.052 0 0 1-.29.71 1.712 1.712 0 0 1-.15.12.776.776 0 0 1-.18.09.646.646 0 0 1-.18.06A1.369 1.369 0 0 1 23 7zM26 7a.99.99 0 0 1-1-1 .838.838 0 0 1 .08-.38 1.155 1.155 0 0 1 .21-.33 1.047 1.047 0 0 1 1.42 0 1.155 1.155 0 0 1 .21.33A1 1 0 0 1 27 6a.99.99 0 0 1-1 1z"></path>
                      </g>
                    </svg> */}
                    {/* <img src={currentUrl} className="w-[32px] h-[32px]"/> */}
                  </div>
                  <div class="ml-4  w-full overflow-hidden text-left p-2 hover:cursor-pointer">
                    <h2 class="font-semibold">{i} YouTube</h2>
                    <p class="mt-2 text-sm text-gray-500 truncate hover:cursor-text">
                      https://google.com{currentUrl}
                      {/* <img src={currentUrl} className="w-[32px] h-[32px]"/> */}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
          return arr;
        })()}
      </div>
      {currentUrl}
    </div>
  );
}
