// material-ui
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, CircularProgress } from '@mui/material';

// project imports
import MainCard from '@/ui-component/cards/MainCard';

const SummaryCard = ({ title, value, loading }) => {
    const theme = useTheme();

    return (
        <MainCard sx={{ width: '100%', backgroundColor: theme.palette.primary[90], color: theme.palette.secondary.main }}>
            <Stack textAlign="center" gap={2}>
                {loading ? (
                    <CircularProgress sx={{ color: theme.palette.secondary.main }} />
                ) : (
                    <Typography variant="h2" sx={{ color: theme.palette.secondary.main }}>
                        {value}
                    </Typography>
                )}
                <Typography variant="h4" sx={{ color: theme.palette.secondary.main, fontWeight: 200 }}>
                    {title}
                </Typography>
            </Stack>
        </MainCard>
    );
};

export default SummaryCard;
