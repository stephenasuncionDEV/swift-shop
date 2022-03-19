import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useCore } from '@/providers/CoreProvider'
import { useUser } from '@/providers/UserProvider'

export const useCategory = () => {
    const { getCategoryProducts } = useCore();
    const { protectPage } = useUser();
    const router = useRouter();
    const { category } = router.query;

    useEffect(() => {
        protectPage();

        if (!category) return;
        
        getCategoryProducts(category);
    }, [category])
}