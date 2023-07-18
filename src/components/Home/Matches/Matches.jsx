import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tabone from './Tabone/Tabone';

const Matches = () => {
    return (
        <div className='bg-black'>
            <div className='text-center'>
                <h1 className="text-[#75C2F6] text-3xl pt-28">CHECK OUR ALL</h1>
                <h1 className="text-7xl mt-4 font-bold text-white font-sans">RECENT MATCHES</h1>
            </div>
            <div className='container mx-auto text-2xl mt-10 gap-10 text-center'>
                <Tabs>
                    <TabList>
                        <Tab>ALL MATCHES</Tab>
                        <Tab>UPCOMING MATCHES</Tab>
                        <Tab>RESULTS</Tab>
                    </TabList>

                    <TabPanel>
                        <Tabone/>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Matches;