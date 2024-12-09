import Image from "next/image";

export default function BlowHero() {
    return (
        <>
            <div className="showBlowBar w-[100%] h-[4rem] bg-[#F9F1E7] flex items-center justify-between px-4">
                {/* Filter Section */}
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/filter.png"
                            width={30}
                            height={30}
                            alt="Filter icon"
                        />
                        <p>Filter</p>
                    </div>
                    <div className="flex gap-4 mt-1 text-sm">
                        <p>1–16</p>
                        <p>16–32</p>
                    </div>
                </div>

                {/* Show Section */}
                <div className="flex items-center gap-2">
                    <p>Show:</p>
                    <input
                        className="w-[2.5rem] h-[2.5rem] bg-orange-300 text-white text-center rounded"
                        type="text"
                        placeholder="16"
                    />
                </div>

                {/* Sort By Section */}
                <div className="flex items-center gap-2">
                    <p>Sort by:</p>
                    <input
                        className="w-[8rem] h-[2.5rem] bg-orange-400 text-white text-center rounded"
                        type="text"
                        placeholder="Enter criteria"
                    />
                </div>
            </div>
        </>
    );
}
