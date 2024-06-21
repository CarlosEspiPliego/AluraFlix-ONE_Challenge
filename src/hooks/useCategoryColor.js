import { useMemo } from 'react';

export const useCategoryColors = () => {
    const categoryColors = useMemo(() => ({
        'Frontend': 'bg-blue-500',
        'Backend': 'bg-yellow-500',
        'Fullstack': 'bg-violet-500',
    }), []);

    const getCategoryColor = (category) => {
        return categoryColors[category] || 'bg-gray-500'; // Color por defecto si la categoría no existe
    };

    return getCategoryColor;
};
