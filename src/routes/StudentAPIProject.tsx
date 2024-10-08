import TabStyleView from '../components/TabStyleView';
import ScrollToTop from '../components/ScrollToTop';
import ImageGallery from 'react-image-gallery';
import { useEffect } from 'react';

const images: {
    original: any;
    thumbnail: any;
}[] = [];

const StudentAPIProject = () => {
    useEffect(() => {
        document.title = 'Student Database API | Portfolio';
    }, []);

    return (
        <>
            <ScrollToTop>
                <TabStyleView className='mt-36' redirect={true}>
                    <div className='p-5 px-8'>
                        <h1 className='text-4xl font-semibold mb-2 font-mono text-center'>Student Database API</h1>
                        <h5 className='text-lg text-indigo-500 mb-4 text-center'>REST API</h5>
                        <div className='flex flex-col justify-center sm:justify-start pt-2'>
                            <p className='text-md'>
                                This project is a REST API that allows for creation of accounts and do CRUD operations with student data.
                                <br />
                                <br />
                            </p>
                            <div className='mt-10'>
                                <div className='mt-3'>
                                    <div className='flex space-x-3 items-center mt-3'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-green-500'>Back-End:</h5>
                                        <h5 className=''>Java, Spring Boot, JUnit </h5>
                                    </div>
                                    <div className='flex space-x-3 items-center mt-3'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-orange-500'>Database:</h5>
                                        <h5 className=''>PostgreSQL</h5>
                                    </div>
                                    <div className='flex space-x-3 items-center mt-3'>
                                        <h5 className='w-fit leading-tight rounded-lg font-medium text-blue-500'>Other:</h5>
                                        <h5 className=''>AWS EC2, RHEL, Azure Apps</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center space-y-4 mt-14'>
                            <p>Checkout the project</p>
                            <div className='flex space-x-3'>
                                <a
                                    href='https://github.com/roynulrohan/StudentDatabase'
                                    rel='noreferrer'
                                    target='_blank'
                                    className='flex items-center p-2 px-4 bg-zinc-700 hover:bg-zinc-800 rounded-lg text-white'>
                                    <svg xmlns='http://www.w3.org/2000/svg' width='1.5em' height='1.5em' viewBox='0 0 24 24' fill='currentColor'>
                                        <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                                    </svg>
                                    <span className='ml-2'>Code</span>
                                </a>
                            </div>
                        </div>
                        {images.length > 0 && (
                            <div className='mt-10 bg-zinc-300 p-2 rounded-xl'>
                                <ImageGallery items={images} showPlayButton={false} additionalClass={'rounded-lg'} />
                            </div>
                        )}
                    </div>
                </TabStyleView>
            </ScrollToTop>
        </>
    );
};

export default StudentAPIProject;
