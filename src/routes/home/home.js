import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import SubheaderDividers from "../../components/header";

export function MainHome(){

    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState(()=>{
        return false;
    })


    // useEffect(() => {
    //     window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //       setCurrentUrl(tabs[0].url);
    //     });
    //   }, []);

    return (<div className="text-blue-600">
        <div>
            
            {(() => {
            const arr = [];
            for (let i = 0; i < 100; i++) {
                arr.push(
                    <div>
                        <div class=" mt-[1px] mb-[1px] flex items-start border border-blue-400 bg-white p-4 shadow-lg border-l-0 border-r-0 border-t-0">
                            <div class=" flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>

                            <div class="ml-4 border border-red w-full text-left p-2">
                                <h2 class="font-semibold">{i} Title</h2>
                                <p class="mt-2 text-sm text-gray-500">https://www.helloworld.com</p>
                            </div>
                            </div>
                    </div>
                );
            }
            return arr;
        })()}
            
        </div>
        <div className="w-full h-[50px]"></div>
        { currentUrl }
    </div>)
}