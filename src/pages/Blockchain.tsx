import { useEffect, useState } from "react"
import Block from "../components/Block"


interface IBlock {
    number?: number,
    nonce?: number,
    data?: string,
    prevHash?: string,
    hash?: string
}

const Blockchain = () => {
    const [blocks, setBlocks] = useState<Array<IBlock>>([]);

    useEffect(() => {
        const setData = () => {
            const block1: IBlock = {
                number: 1,
                nonce: 1,
                data: "data1",
                prevHash: "1234",
                hash: "12345"
            }
            const block2: IBlock = {
                number: 2,
                nonce: 2,
                data: "data2",
                prevHash: "1111234",
                hash: "12343335"
            }
            setBlocks([...blocks, block1, block2]);

        }
        setData();


    }, [])
    return (
        <>
            <div>Blockchain Demo</div>
            {blocks.map(blockMap => (

                <Block
                    key={blockMap.number}
                    number={blockMap.number}
                    nonce={blockMap.nonce}
                    data={blockMap.data}
                    prevHash={blockMap.prevHash}
                    hash={blockMap.hash}
                />
            ))}
            <Block 
                number={blocks.length}    
            />
        </>
    )
}

export default Blockchain