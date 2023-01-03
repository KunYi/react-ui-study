import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const CONFIG_STORAGE_KEY = 'omaha_config';

export interface OmahaConfig {
  title: string;
  omaha_config: string;
  omaha_version: string;
  login_url: string;
  auth_mode: string;
  header_style: string;
  [prop: string]: any;
}

const omahaConfig = localStorage.getItem(CONFIG_STORAGE_KEY) || '{}';
const initialState: OmahaConfig = JSON.parse(omahaConfig) || ({} as OmahaConfig);

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setConfig: (state, action: PayloadAction<OmahaConfig>) => {
      Object.assign(state, action.payload);
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(state));
    },
  },
});

export const { setConfig } = configSlice.actions;
export default configSlice.reducer;
