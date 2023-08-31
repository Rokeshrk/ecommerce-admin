"use client";

import { useStoreModelStore } from "@/hooks/use-store-model";
import { Model } from "@/components/ui/model";

export const StoreModel = () =>{
    const StoreModel = useStoreModelStore();
    return(
    <Model
        title="Create store"
        description="Add a new store to manage products and categories"
        isOpen={StoreModel.isOpen}
        onClose={StoreModel.onClose}
    >
        Future Create Store Form
    </Model>
    );
};