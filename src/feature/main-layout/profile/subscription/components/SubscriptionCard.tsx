const SubscriptionCard = ({subscription}: {subscription: any}) => { 
    console.log(subscription)  

    return (
         <div className={`w-full sm:w-[300px] h-[400px] rounded-xl p-4 flex flex-col items-center text-center relative pt-8 pb-4`}   style={{ backgroundColor: subscription.bgcolor }}>
        <div className="bg-[#343434] text-white text-xs px-4 py-1.5 rounded-full mb-4">
            {subscription.name}
        </div>
        
        <h2 className="text-primary text-2xl font-medium mb-8">{subscription.price}</h2>
        
        <p className="text-[#1A1A1A] font-medium text-lg">
          {
          subscription.services?.map((service: string, index: number) => (
            <span key={index}>{service}</span>
          ))
          }
        </p>

        <button   style={{ backgroundColor: subscription.buttonColor }} className={`w-full mt-auto py-3 rounded-lg text-white text-sm font-medium transition-colors shadow-sm`}>
          {subscription.buttonName}
        </button>
      </div>
    )
}

export default SubscriptionCard 

