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

const admin = {
    id: 'admin',
    title: 'admin',
    caption: 'admin',
    icon: null,
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/admin/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false,
            external: false,
            target: false
        },
        {
            id: 'user-management',
            title: 'Manajemen Pengguna',
            type: 'item',
            url: '/admin/user-management',
            icon: icons.IconUserCog,
            breadcrumbs: false,
            external: false,
            target: false
        }
    ]
};

export default admin;
