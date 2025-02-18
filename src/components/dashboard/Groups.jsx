"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import handleGroups from '@/controller/dashboard/groups'


const Groups = (groupsIDs) => {

    useEffect(() => {
        const GetGroups = async () => {
            const response = await handleGroups(groupsIDs);
        
        if(response) {
            setGroups(response);
        }
        else{
            console.log("Error fetching groups");
        }
    }   
    GetGroups()
    }, [groupsIDs])
    const [groups, setGroups] = useState({})
  return (
    <div>
        <h1 className='font-bold font-serif text-3xl'>Groups:</h1>

        <div className='mt-4'>
        {groups.length>0 && groups.map(group => (
            <div className=' bg-secondary shadow-2xl py-4 px-8 w-max ' key={group._id}>
                <img src={group.image} />
                <h2>{group.name}</h2>
                <p>membres: {group.members?.length+1}</p>
            </div>
        ))
        }
        </div>
    </div>
  )
}

export default Groups