// assets
import {
    IconBuildingWarehouse,
    IconCategory,
    IconClipboardData,
    IconDashboard,
    IconReceiptRefund,
    IconShoppingCartPlus,
    IconShoppingCartX,
    IconUserCog,
    IconColorFilter
} from '@tabler/icons-react';

// constant
const icons = {
    IconBuildingWarehouse,
    IconCategory,
    IconClipboardData,
    IconDashboard,
    IconReceiptRefund,
    IconShoppingCartPlus,
    IconShoppingCartX,
    IconUserCog,
    IconColorFilter
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const staff = {
    id: 'staff',
    title: 'staff',
    caption: 'staff',
    icon: null,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/staff/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false,
            external: false,
            target: false
        }
    ]
};

export default staff;
