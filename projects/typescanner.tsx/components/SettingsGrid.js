import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import useInterval from '../../../hooks/useInterval';

import Artboard from './Artboard';
import GridA from './settings-grid-a.svg';
import GridB from './settings-grid-b.svg';
import GridC from './settings-grid-c.svg';

const animation = [
  {
    pathA: "823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,710.7399999999998,823,583.1199999999999,823,583.1199999999999,823,583.1199999999999,823,583.1199999999999,823,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,455.5,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,695.3800000000001,328.05999999999995,567.7599999999998,328.05999999999995,567.7599999999998,328.05999999999995,567.7599999999998,328.05999999999995,567.7599999999998,328.05999999999995,567.7599999999998,328.05999999999995,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,567.7599999999998,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,200.44000000000005,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,328.05999999999995,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,455.5,440.32000000000016,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,583.1199999999999,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998,312.7000000000003,710.7399999999998",
    pathB: "312.7000000000003,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,440.32000000000016,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,567.7599999999998,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999,695.3800000000001,583.1199999999999",
    grid: <GridA />
  },
  {
    pathA: "776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,776.7400000000002,811.1800000000003,673.06,631.7200000000003,776.7400000000002,811.1800000000003,673.06,631.7200000000003,776.7400000000002,811.1800000000003,673.06,631.7200000000003,776.7400000000002,811.1800000000003,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,776.7400000000002,452.0799999999999,673.06,272.44000000000005,776.7400000000002,452.0799999999999,673.06,272.44000000000005,776.7400000000002,452.0799999999999,673.06,272.44000000000005,776.7400000000002,452.0799999999999,673.06,272.44000000000005,776.7400000000002,452.0799999999999,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,673.06,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,465.7000000000003,272.44000000000005,362.0199999999995,452.0799999999999,465.7000000000003,272.44000000000005,362.0199999999995,452.0799999999999,465.7000000000003,272.44000000000005,362.0199999999995,452.0799999999999,465.7000000000003,272.44000000000005,362.0199999999995,452.0799999999999,465.7000000000003,272.44000000000005,362.0199999999995,452.0799999999999,465.7000000000003,272.44000000000005,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,362.0199999999995,811.1800000000003,465.7000000000003,631.7200000000003,362.0199999999995,811.1800000000003,465.7000000000003,631.7200000000003,362.0199999999995,811.1800000000003,154.65999999999985,811.1800000000003,362.0199999999995,811.1800000000003,154.65999999999985,811.1800000000003,362.0199999999995,811.1800000000003,154.65999999999985,811.1800000000003,362.0199999999995,811.1800000000003,154.65999999999985,811.1800000000003,362.0199999999995,811.1800000000003,154.65999999999985,811.1800000000003",
    pathB: "362.0199999999995,452.0799999999999,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,465.7000000000003,631.7200000000003,673.06,631.7200000000003,465.7000000000003,631.7200000000003,673.06,631.7200000000003,465.7000000000003,631.7200000000003,673.06,631.7200000000003,465.7000000000003,631.7200000000003,673.06,631.7200000000003,465.7000000000003,631.7200000000003,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999,673.06,631.7200000000003,776.7400000000002,452.0799999999999",
    grid: <GridB />
  },
  {
    pathA: "761.9800000000005,882.0999999999995,761.9800000000005,882.0999999999995,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,685.8400000000001,395.3800000000001,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,647.8600000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,366.8800000000001,151.65999999999985,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,404.8600000000001,395.3800000000001,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,162.03999999999996,638.7399999999998,162.03999999999996,638.7399999999998,162.03999999999996,638.7399999999998,162.03999999999996,638.7399999999998,162.03999999999996,638.7399999999998,162.03999999999996,638.7399999999998,200.20000000000027,881.9200000000001,200.20000000000027,881.9200000000001,200.20000000000027,881.9200000000001,200.20000000000027,881.9200000000001",
    pathB: "443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,443.0199999999995,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998,724,638.7399999999998",
    grid: <GridC />
  },
]

const SettingsGrid = () => {
  const [index, setIndex] = useState(0);
  const [letter, setLetter] = useSpring(()=>({
    from: {
      pathA: animation[index].pathA,
      pathB: animation[index].pathB
    }
  }))

  useEffect(() => {
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
        <g>
          {animation[index].grid}
        </g>
      }
    />
  )
}

export default SettingsGrid;