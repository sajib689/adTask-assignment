import Image from "next/image";

const YoutubeSection = () => {
    return (
        <div className='h-screen bg-gradient-to-b from-black to-gray-900 text-white flex items-center justify-center'>
            <div className="relative">
                <Image 
                    src='/youtube.png' 
                    alt='Youtube Logo' 
                    width={850} 
                    height={650} 
                    objectFit="contain" 
                />
                <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent animate-borderSnake"></div>
            </div>
        </div>
    );
};

export default YoutubeSection;
