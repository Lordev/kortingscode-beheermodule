import { create } from 'zustand';

type MobileLayoutStoreType = {
	mobileBreakpointSize: number;
	mobileBreakpoint: boolean;
	SideMenuOpen: boolean;
	toggleMobileMenu: () => void;
	setSideMenuOpen: () => void;
	setSideMenuClose: () => void;
	setMobileBreakpoint: (value: boolean) => void;
};

export const useMobileLayoutStore = create<MobileLayoutStoreType>(set => ({
	mobileBreakpointSize: 576,
	mobileBreakpoint: false,
	SideMenuOpen: false,
	toggleMobileMenu: () =>
		set(state => ({ SideMenuOpen: !state.SideMenuOpen })),
	setSideMenuOpen: () => set(() => ({ SideMenuOpen: true })),
	setSideMenuClose: () => set(() => ({ SideMenuOpen: false })),
	setMobileBreakpoint: value => set(() => ({ mobileBreakpoint: value })),
}));
