import { VNodeChild, CSSProperties, HTMLAttributes } from 'vue';

export type MenuMode = 'vertical' | 'vertical-left' | 'vertical-right' | 'horizontal' | 'inline';

export interface MenuInfo {
  key: string;
  keyPath: string[];
  item: VNodeChild;
  domEvent?: MouseEvent;
}

export interface SelectInfo extends MenuInfo {
  selectedKeys?: string[];
}

export type OpenEventHandler = (
  keys:
    | string[]
    | {
        key: string;
        item: VNodeChild;
        trigger: string;
        open: boolean;
      },
) => void;

export type CollapseType = 'clickTrigger' | 'responsive';

export type SiderTheme = 'light' | 'dark';

export interface SiderProps extends HTMLAttributes {
  prefixCls?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  zeroWidthTriggerStyle?: CSSProperties;
  trigger?: VNodeChild | JSX.Element;
  width?: number | string;
  collapsedWidth?: number | string;
  breakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  theme?: SiderTheme;
  onBreakpoint?: (broken: boolean) => void;
}