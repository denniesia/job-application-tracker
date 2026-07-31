'use client';

import { useState } from 'react';

export default function useBoard(initialboard = null) {
    const [board, setBoard] = useState(initialboard);
    const [columns, setColumns] = useState(initialboard?.columns);
    const [error, setError] = useState(null);

    async function moveJob(
        jobApplicationId, 
        newColumnId, 
        newOrder
    ) {
        
    }

    return { board, column, error };
}
