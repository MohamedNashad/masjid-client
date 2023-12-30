import { createSlice } from "@reduxjs/toolkit";

export interface toggleState {
  collapseSidebarMenu: boolean;
  collapseSubMenu: boolean;
}

const initialState: toggleState = {
  collapseSidebarMenu: false,
  collapseSubMenu: false,
};

const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState,
  reducers: {
    toggleSubMenu(state: toggleState) {
      state.collapseSubMenu = false;
    },
    toggleAction(state: toggleState) {
      // flipping the boolean
      state.collapseSidebarMenu = !state.collapseSidebarMenu;
    },
  },
});
export const { toggleAction, toggleSubMenu } = toggleSidebarSlice.actions;
export default toggleSidebarSlice.reducer;
