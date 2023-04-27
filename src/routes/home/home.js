import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

export function MainHome(){

    const location = useLocation();
    const [currentUrl, setCurrentUrl] = useState(()=>{
        return 0;
    })

    useEffect(() => {
        window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          setCurrentUrl(tabs[0].url);
        });
      }, []);

    return (<div className="text-blue-600">
        this is home page ASDa asdf asdfas dfsdf <br/>
        { currentUrl }
    </div>)
}