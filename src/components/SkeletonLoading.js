import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

export default function SkeletonLoading() {
    return (
        <Stack spacing={1}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '10px',
            }}>
                <Skeleton variant="rounded" width={'20%'} height={40} />
                <Skeleton variant="rounded" width={'70%'} height={60} />
                <Skeleton variant="rounded" width={'70%'} height={60} />
                <Skeleton variant="rounded" width={'70%'} height={60} />
            </Box>
        </Stack>
    );
}
