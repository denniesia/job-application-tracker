'use client';

import { useEffect, useState } from 'react';

export default function useBoard(initialboard = null) {
    const [board, setBoard] = useState(initialboard);
    const [columns, setColumns] = useState(initialboard?.columns);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (initialboard) {
            setBoard(initialboard);
            setColumns(initialboard.columns)
        }
    }, [initialboard])

    async function moveJob(
        jobApplicationId, 
        newColumnId, 
        newOrder
    ) {
        
    }

    return { board, columns, error };
}
