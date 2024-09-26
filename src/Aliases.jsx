/* eslint-disable react/jsx-props-no-spreading */
/**
 * Material-UI Component Aliases
 * Simplify your code with shorter aliases for commonly used MUI components.
 * @module Aliases
 * use aliases in your react components markup
   import { BO, BF, BS } from './muiAliases';
   function MyComponent() {
        return (
            <div>
                <BO>Outline Button</BO>
                <BF>Filled Button</BF>
                <BS>Small Button</BS>
            </div>
        );
    }
 */
import {
  Button,
  TextField,
  Typography,
  Paper,
  CardContent,
  CardActions,
  Grid,
  Box,
  IconButton,
  ListItemText,
  ListItem,
  List,
  Chip,
  Divider,
  CircularProgress,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Drawer,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide
} from '@mui/material'
import React from 'react'

// Components
export const B = Button
export const TF = TextField
export const TG = Typography
export const P = Paper
export const CC = CardContent
export const CA = CardActions
export const G = Grid
export const BX = Box
export const IB = IconButton
export const LIT = ListItemText
export const LI = ListItem
export const L = List
export const C = Chip
export const D = Divider
export const CP = CircularProgress

// Input Components
export const IL = InputLabel
export const S = Select
export const MI = MenuItem
export const FC = FormControl
export const FCL = FormControlLabel
export const CB = Checkbox
export const R = Radio
export const RG = RadioGroup

// Navigation Components
export const TABS = Tabs
export const TAB = Tab
export const AB = AppBar
export const TB = Toolbar
export const DW = Drawer

// Feedback Components
export const SB = Snackbar
export const AL = Alert
export const DG = Dialog
export const DGT = DialogTitle
export const DGC = DialogContent
export const DGA = DialogActions
export const SL = Slide

// Button Variants
export function BO(props) {
  return <B variant="outlined" {...props} />
}
export function BF(props) {
  return <B variant="filled" {...props} />
}
export function BC(props) {
  return <B variant="contained" {...props} />
}
export function BS(props) {
  return <B size="small" {...props} />
}

// Typography Variants
export function TGh1(props) {
  return <TG variant="h1" {...props} />
}
export function TGh2(props) {
  return <TG variant="h2" {...props} />
}
export function TGh3(props) {
  return <TG variant="h3" {...props} />
}
export function TGh4(props) {
  return <TG variant="h4" {...props} />
}
export function TGh5(props) {
  return <TG variant="h5" {...props} />
}
export function TGh6(props) {
  return <TG variant="h6" {...props} />
}
export function TGcp(props) {
  return <TG variant="caption" {...props} />
}
export function TGbl(props) {
  return <TG fontWeight="bold" {...props} />
}

// Paper Variants
export function P0(props) {
  return <P elevation={0} {...props} />
}
export function P1(props) {
  return <P elevation={1} {...props} />
}
export function P2(props) {
  return <P elevation={2} {...props} />
}
export function P3(props) {
  return <P elevation={3} {...props} />
}
export function P4(props) {
  return <P elevation={4} {...props} />
}
export function P6(props) {
  return <P elevation={6} {...props} />
}
export function P8(props) {
  return <P elevation={8} {...props} />
}
export function P12(props) {
  return <P elevation={12} {...props} />
}
export function P16(props) {
  return <P elevation={16} {...props} />
}
export function P24(props) {
  return <P elevation={24} {...props} />
}
