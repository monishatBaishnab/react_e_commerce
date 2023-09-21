import { BallTriangle } from 'react-loader-spinner';
const Loading = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-white/70 flex items-center justify-center'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    );
};

export default Loading;