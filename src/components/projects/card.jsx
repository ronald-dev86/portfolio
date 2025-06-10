import React, { useState } from 'react';

function CardProject({ initialItems }) {
    const [items] = useState(initialItems)
    return (
        <>
            {items.map((item) => (
                <div  className="flex flex-col items-center m-4 bg-white border border-gray-200 rounded-lg shadow-sm lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 lg:h-auto lg:w-48 lg:rounded-none lg:rounded-s-lg" src={`${item.image}`} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                        <div class="flex justify-around text-center">
                            {
                                item?.repositories.map(row =>(
                                    <a href={`${row.link}`} target="_blank"  className="text-black justify-center">
                                           <img className="size-8 text-black" src={`${row.icon}`} />
                                    </a>
                                ))
                            }
                            
      
                        </div>
                    </div>
                </div>
            ))}
        </>
    );

}

export default CardProject;