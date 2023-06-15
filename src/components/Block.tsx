import { useState } from 'react';
import {Form} from 'react-router-dom';

type BlockProps = {
    number?: number,
    nonce?: number,
    data?: string,
    prevHash?: string,
    hash?: string
}

const Block = ({number,
                nonce,
                data,
                prevHash,
                hash,}:BlockProps) => {
    
    const [attempt,setAttempt] = useState<number>(0);
  

    return (
    <div>
        <div className='bg-white shadow rounded-sm md:w-3/4 mx-auto px-5 py-10 mt-20bg-white shadow rounded-sm md:w-3/4 mx-auto px-5 py-10 mt-20'>
        <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="number"
                >Block Number:</label>
                <input 
                    id="number"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Customer Name"
                    name="block Number"
                    defaultValue={number}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nonce"
                >Nonce:</label>
                <input 
                    id="nonce"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="nonce"
                    name="nonce"
                    defaultValue={nonce}
                    disabled={true}
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="data"
                >Data:</label>
                <textarea 
                    id="data"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="data"
                    name="data"
                    defaultValue={data}
                />
            </div>
           
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="prevHash"
                >Previous Hash:</label>
                <input 
                    id="prevHash"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="prevHash"
                    name="prevHash"
                    defaultValue={prevHash}
                    disabled={true}
                />
                
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="hash"
                >Hash:</label>
     
                <input 
                    id="hash"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="hash"
                    name="hash"
                    defaultValue={hash}
                    disabled={true}
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="attenpt"
                >Attempt:</label>
     
                <input 
                    id="attempt"
                    type="number"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="attempt"
                    name="attempt"
                    defaultValue={attempt}
                    disabled={true}
                />
            </div>
        </div>
            
        </div>
  )
}

export default Block