import { useState, useEffect } from 'react'
import { useCore } from '@/providers/CoreProvider'

export const useShop = () => {
    const { getCategory } = useCore();
    const [isCategoryLoading, setIsCategoryLoading] = useState(false);
    const [categories, setCategories] = useState();

    useEffect(() => {
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