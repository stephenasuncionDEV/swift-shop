import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'

export const useShop = () => {
    const { getCategory } = useCore();
    const { protectPage } = useUser();
    const [isCategoryLoading, setIsCategoryLoading] = useState(false);
    const [categories, setCategories] = useState();

    useEffect(() => {
        if (!protectPage) return;
        protectPage();

        (async () => {
            setIsCategoryLoading(true);

            const category = await getCategory();
            setCategories(category);

            setIsCategoryLoading(false);
		})()
    }, [])

    return {
        isCategoryLoading,
        setIsCategoryLoading,
        categories,
        setCategories
    }
}