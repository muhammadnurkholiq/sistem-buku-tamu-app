// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Box, Typography } from '@mui/material';

// project imports
import SummaryCard from '@/ui-component/cards/SummaryCard';

const userManagement = () => {
    const theme = useTheme();

    return (
        <Grid container>
            {/* summary */}
            <Grid item xs={12}>
                <Stack direction={{ md: 'row' }} alignItems="center" justifyContent="space-between" gap={2}>
                    <SummaryCard title="Total Pengguna" value={10} />
                    <SummaryCard title="Admin" value={5} />
                    <SummaryCard title="Staff" value={5} />
                </Stack>
            </Grid>
        </Grid>
    );
};

export default userManagement;
