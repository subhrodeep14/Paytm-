 
 export function InputBox({labels,placeholder}: {labels: string,placeholder: string}) {
   return (
     <div className="flex flex-col justify-center items-center">
        <div className="text-left text-lg font-semibold">
            {labels}
        </div>
       <input className="border-2 border-gray-400 p-2 rounded-lg" type="text" placeholder={placeholder} />
     </div>
   )
 }