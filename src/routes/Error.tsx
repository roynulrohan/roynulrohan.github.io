import { useNavigate } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import TabStyleView from '../components/TabStyleView';
import { useEffect } from 'react';

export default function ErrorPage() {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Error 404 | Portfolio';
    }, []);

    return (
        <ScrollToTop>
            <TabStyleView className='mt-36' redirect={true}>
                <div className='flex items-center h-96 justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-xs font-semibold text-red-600 uppercase '>Error 404</span>
                        <h1 className='block mt-2 text-2xl font-semibold text-zinc-800 '>
                            Oops! Couldn't find the page <code className='text-red-500'>{window.location.pathname}</code>
                        </h1>

                        <div className='mt-8'>
                            <button
                                onClick={() => {
                                    navigate(-1);
                                }}
                                className='px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700'>
                                Go back
                            </button>
                        </div>
                    </div>
                </div>
            </TabStyleView>
        </ScrollToTop>
    );
}
