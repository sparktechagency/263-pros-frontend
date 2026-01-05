import  { buySubscriptions } from "@/constants/subscription"
import { Modal } from "antd"
import SubscriptionCard from "./SubscriptionCard"

const BuySubscriptionModal = ({open, setOpen}: {open: boolean, setOpen: (open: boolean) => void}) => {
    return (
        <Modal open={open} onCancel={() => setOpen(false)} footer={null} centered width={"auto"}>
           <div className="pb-10"> 
            <h1 className="text-xl md:text-2xl font-medium text-[#292929] pb-2">Subscription Packages</h1> 
            <p className="text-[#919191] text-sm font-medium">Flexible plans based on how many services you handle</p>
           </div> 

           <div> 
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
                {
                    buySubscriptions?.map((data: any) => ( 
                        <div key={data.id} className=""> 
                            <SubscriptionCard subscription={data} />
                        </div>
                    ))
                }
            </div>
           </div>
        </Modal>
    )
} 

export default BuySubscriptionModal
