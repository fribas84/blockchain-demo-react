import { useEffect, useState } from "react"
import Block from "../components/Block"


interface IBlock {
    height?: number,
    nonce?: number,
    data?: string,
    prevHash?: string,
    hash?: string
}

const Blockchain = () => {
    const [blocks, setBlocks] = useState<Array<IBlock>>([]);
    const [block, setBlock] = useState<IBlock>();
    
  
    useEffect(() => {
        const setData = () => {
            const block1: IBlock = {
                height: 0,
                nonce: 1,
                data: "data1",
                prevHash: "1234",
                hash: "12345"
            }
            const block2: IBlock = {
                height: 1,
                nonce: 2,
                data: "data2",
                prevHash: "1111234",
                hash: "12343335"
            }
           setBlocks([block1, block2]); 
        }
        setData();
    }, [])


    const handleNewBlock =  (nonce:number, data:string,prevHash:string, hash:string):void =>{
        const newBlock:IBlock = {
            height:blocks.length,
            nonce:nonce,
            data:data,
            prevHash:prevHash,
            hash:hash
        }
        setBlocks([...blocks,newBlock]);
    }
    return (
        <>
            <h1 className="font-bold text-center text-4xl">Blockchain Demo</h1>
            <p className="text-center">This site emulates the mining process in a Proof-of-Work Blockchain</p>
            {blocks.map(blockMap => (

                <Block
                    key={blockMap.height}
                    height={blockMap.height}
                    nonce={blockMap.nonce}
                    data={blockMap.data}
                    prevHash={blockMap.prevHash}
                    hash={blockMap.hash}
                />
            ))}

            <Block
                height={blocks.length}
                key={blocks.length}
                nonce={0}
                data={""}
                prevHash={""}
                hash={""}                    
            />
        </>
    )
}

export default Blockchain