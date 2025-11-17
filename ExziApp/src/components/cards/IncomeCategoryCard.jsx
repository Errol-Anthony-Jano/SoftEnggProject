import EditIncomeCategoryMenu from "../menus/EditIncomeCategoryMenu";

const IncomeCategoryCard = ({category}) => {
    return (
        <div className="flex flex-col bg-[#0d1518] rounded-lg w-1/5 h-1/5 p-4 gap-4">
            <div className="flex w-full justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-[#101a1e] rounded-lg p-2 text-[2rem]">
                        {category.emoji}
                    </div>
                    <p>{category.categoryName}</p>
                </div>
                <EditIncomeCategoryMenu />
            </div>
            <p>{category.currentBalance}</p>
        </div>
    )
}

export default IncomeCategoryCard