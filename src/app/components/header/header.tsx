import { useEffect, useState } from "react";

export default function Header() {

    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const handleScroll = () => {
        if (window.scrollY > 950) {
            setIsTransparent(true);
        } else {
            setIsTransparent(false);
        }
    };

    return (

        <header className=" transition-opacity h-screen w-full"

            style={{
                display: "flex",
                flexDirection: isTransparent ?  "column" : "row",
                position: isTransparent ? 'fixed' : 'static' ,
                justifyContent: 'center',
                height: isTransparent ?  "80px" : '100vh',
                backgroundAttachment: 'local',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                background: isTransparent ?  "transparent" : "url('/img/ocean-bg.png')"
            }}>

            <div className="flex items-center  mx-[50px]"
            >
                <div>
                    <img src="/img/logo2.svg" className="w-[400px]" style={{ width: isTransparent ?  '180px' : '400px' }} /> {/* Alteração aqui: largura menor quando transparente, maior quando não transparente */}
                </div>

                <button id="login-btn" className="ml-auto font-bold p-button text-primary bg-white rounded-xl"
                    style={{
                        visibility: isTransparent ?  "visible" : "hidden"
                    }}>
                    Login
                </button>
            </div>
        </header>
    );
}
