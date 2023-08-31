"use client";

import { useEffect } from 'react';

import { useStoreModelStore } from '@/hooks/use-store-model';


const SetupPage =() => {
  const onOpen = useStoreModelStore((state)=> state.onOpen);
  const isOpen = useStoreModelStore((state)=> state.isOpen);

  useEffect(() =>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);

  return (
    <div className='p-4'>
        
    </div>
  )
}

export default SetupPage;
