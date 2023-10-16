// material-ui
import { createTheme } from '@mui/material/styles';

// assets
import defaultColor from '@/assets/scss/_themes-vars.module.scss';

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (navType) => {
    let colors = defaultColor;

    return createTheme({
        palette: {
            mode: navType,
            common: {
                black: colors.darkPaper
            },
            primary: {
                light: colors.primaryLight,
                main: colors.primaryMain,
                dark: colors.primaryDark,
                200: colors.primary200,
                800: colors.primary800
            },
            secondary: {
                light: colors.secondaryLight,
                main: colors.secondaryMain,
                dark: colors.secondaryDark,
                200: colors.secondary200,
                800: colors.secondary800
            },
            error: {
                light: colors.errorLight,
                200: colors.error200,
                main: colors.errorMain,
                dark: colors.errorDark
            },
            orange: {
                light: colors.orangeLight,
                main: colors.orangeMain,
                dark: colors.orangeDark
            },
            blue: {
                light: colors.blueLight,
                main: colors.blueMain
            },
            purple: {
                light: colors.purpleLight,
                main: colors.purpleMain
            },
            green: {
                light: colors.greenLight,
                main: colors.greenMain
            },
            warning: {
                light: colors.warningLight,
                200: colors.warning200,
                main: colors.warningMain,
                dark: colors.warningDark
            },
            success: {
                light: colors.successLight,
                200: colors.success200,
                main: colors.successMain,
                dark: colors.successDark
            },
            grey: {
                50: colors.grey50,
                100: colors.grey100,
                500: colors.grey500,
                600: colors.grey900,
                700: colors.grey700,
                900: colors.grey900
            },
            dark: {
                light: colors.darkTextPrimary,
                main: colors.darkLevel1,
                dark: colors.darkLevel2,
                800: colors.darkBackground,
                900: colors.darkPaper
            },
            text: {
                primary: colors.grey700,
                secondary: colors.grey500,
                dark: colors.grey900,
                hint: colors.grey100,
                light: colors.paper
            },
            divider: colors.primary200,
            background: {
                paper: colors.paper,
                default: colors.paper
            }
        }
    });
};

export default Palette;
