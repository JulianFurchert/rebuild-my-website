import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useInterval from '../../../hooks/useInterval';

import Artboard from './Artboard';
import SettingsZoom from './assets/settings-zoom.svg';


const animation = [
  {
    pathA: "770.3999999999996,766.3200000000002,770.3999999999996,766.3200000000002,770.3999999999996,766.3200000000002,770.3999999999996,766.3200000000002,770.3999999999996,766.3200000000002,770.3999999999996,766.3200000000002,770.3999999999996,766.3200000000002,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,656.3999999999996,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,451.32000000000016,715.44,341.39999999999964,715.44,341.39999999999964,715.44,341.39999999999964,715.44,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,341.39999999999964,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,231.48000000000002,605.52,121.55999999999995,605.52,121.55999999999995,605.52,121.55999999999995,605.52,121.55999999999995,605.52,121.55999999999995,605.52,121.55999999999995,605.52,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,121.55999999999995,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,231.48000000000002,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,495.60000000000036,341.39999999999964,385.67999999999984,341.39999999999964,385.67999999999984,341.39999999999964,385.67999999999984,341.39999999999964,385.67999999999984,341.39999999999964,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,385.67999999999984,451.32000000000016,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,546.48,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,656.3999999999996,330.72,766.3200000000002,330.72,766.3200000000002,330.72,766.3200000000002,330.72,766.3200000000002,330.72,766.3200000000002,330.72,766.3200000000002,330.72,766.3200000000002,330.72,766.3200000000002",
    pathB: "330.72,546.48,330.72,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,440.6399999999999,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,550.56,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,660.48,546.48,770.3999999999996,546.48,770.3999999999996,546.48,770.3999999999996,546.48",
    zxy: [12,-1650,-2100],
    percent: 12,
  },
  {
    pathA: "880.5999999999999,799.4800000000005,880.5999999999999,799.4800000000005,880.5999999999999,799.4800000000005,880.5999999999999,799.4800000000005,880.5999999999999,799.4800000000005,880.5999999999999,799.4800000000005,880.5999999999999,634.5999999999995,880.5999999999999,634.5999999999995,880.5999999999999,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,715.7199999999998,469.7199999999998,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,326.9800000000005,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,633.2800000000002,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,162.0999999999999,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,468.4000000000001,326.9800000000005,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,469.7199999999998,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,221.07999999999993,634.5999999999995,221.07999999999993,634.5999999999995,221.07999999999993,634.5999999999995,221.07999999999993,799.4800000000005,221.07999999999993,799.4800000000005,221.07999999999993,799.4800000000005,221.07999999999993,799.4800000000005,221.07999999999993,799.4800000000005,221.07999999999993,799.4800000000005,221.07999999999993,799.4800000000005",
    pathB: "385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,385.96000000000004,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,550.8400000000001,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995,715.7199999999998,634.5999999999995",
    zxy: [18,-2750,-3500],
    percent: 18,
  },
  {
    pathA: "743.3399999999997,816.0600000000004,743.3399999999997,816.0600000000004,743.3399999999997,816.0600000000004,743.3399999999997,816.0600000000004,743.3399999999997,816.0600000000004,743.3399999999997,816.0600000000004,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,743.3399999999997,431.34000000000015,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,264.8100000000004,647.1600000000003,72.44999999999982,647.1600000000003,72.44999999999982,647.1600000000003,72.44999999999982,647.1600000000003,72.44999999999982,647.1600000000003,72.44999999999982,647.1600000000003,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,72.44999999999982,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,454.8000000000002,264.8100000000004,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,431.34000000000015,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,816.0600000000004,358.6199999999999,816.0600000000004,358.6199999999999,816.0600000000004,358.6199999999999,816.0600000000004,358.6199999999999,816.0600000000004,358.6199999999999,816.0600000000004,358.6199999999999,816.0600000000004",
    pathB: "358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,358.6199999999999,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,550.98,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998,743.3399999999997,623.6999999999998",
    zxy: [21,-3300,-4200],
    percent: 21,
  },
]


const SettingsZoomComponent = () => {
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useSpring(()=>({
    from: {
      pathA: animation[index].pathA,
      pathB: animation[index].pathB
    }
  }))

  const [grid, setGrid] = useSpring(()=>({
    from: {
      zxy: animation[index].zxy,
      percent: animation[index].percent
    }
  }))

  useEffect(() => {
    setGrid({
      zxy: animation[index].zxy,
      percent: animation[index].percent
    })
    setLetter({
      pathA: animation[index].pathA,
      pathB: animation[index].pathB,
      delay: 800
    })
  },[index])

  useInterval(() => {
    setIndex((index + 1) % 3);
  }, 3000);

  return(
    <Artboard
      letter={
        <>
          <animated.polyline  points={letter.pathA} />
          <animated.polyline  points={letter.pathB} />
        </>
      }
      grid={
        <animated.g transform={grid.zxy.interpolate((z, x, y) => `matrix(${z},0,0,${z},${x},${y})`)}>
          <SettingsZoom />
        </animated.g>
      }
    />

  )
}

export default SettingsZoomComponent;