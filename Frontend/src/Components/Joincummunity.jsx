import React from 'react';
import { Link } from 'react-router-dom';

const JoinCommunity = () => {
    return (
        <div className="flex justify-center items-center h-[60vh] bg-gradient-to-r pt-[12rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 p-[10rem] max-w-8xl">

                {/* For Companies Section */}
                <div className="flex flex-col items-center text-center bg-[#393838] p-8 rounded-lg shadow-md">
                    <span className="bg-[#23ab94] text-white px-8 py-4 rounded-full text-s font-semibold mb-2">Supporters</span>
                    <h2 className="text-2xl font-semibold text-[#23ab94]">For Daily Users , Helpers</h2>
                    <p className="text-gray-300 mt-4 text-[20px]">
                        We are the market-leading technical interview platform to identify and hire developers with the right skills.
                    </p>
                    <Link to="/signup">
                        <button className="mt-6 px-8 py-4 bg-[#23ab94] text-white font-semibold rounded hover:bg-[#f0f3f3] hover:text-black">
                            Users
                        </button>
                    </Link>
                    <p className="mt-4 text-s text-gray-500">
                        Don't have an account? <span className="font-semibold text-black">Contact sales or Get free trial.</span>
                    </p>
                </div>

                {/* For Developers Section */}
                <div className="flex flex-col items-center text-center bg-[#f6f5f5] p-8 rounded-lg shadow-md pt-[2rem]  ">
                    <h2 className="text-3xl font-semibold text-[#23ab94] mt-7">For Shelter Owners</h2>
                    <p className="text-gray-600 mt-4 text-[20px]">
                        Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
                    </p>
                    <Link to="/ownersignup">
                        <button className="mt-6 px-8 py-4 bg-[#23ab94] text-white font-semibold rounded hover:bg-[#000000] hover:text-white">
                            Owners
                        </button>
                    </Link>
                    <p className="mt-5 text-s text-gray-500">
                        Don't have an account? <span className="font-semibold text-black">Contact sales or Get free trial.</span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default JoinCommunity;
