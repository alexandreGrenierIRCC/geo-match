import { DSSizes } from '../../../shared/constants/jl-components.constants';
import { IndicatorStatus } from '../indicator/indicator.component';
export interface INavigationConfig {
    id: string;
    label?: string;
    iconLeading?: string;
    iconTrailing?: string;
    size: keyof typeof DSSizes;
    height: string;
    marginTop: number;
    scrolling: boolean;
    navigationConfig?: Array<INavigationItem>;
}
export declare enum NavigationItemType {
    accordion = "accordion",
    heading = "heading",
    link = "link",
    divider = "divider"
}
export declare enum NavigationStatus {
    notStarted = "notStarted",
    inProgress = "inProgress",
    complete = "complete",
    locked = "locked"
}
export interface INavigationIndicator {
    status: keyof typeof IndicatorStatus;
    icon: string;
    label?: string;
}
export interface INavigationItem {
    id: string;
    label: string;
    type: keyof typeof NavigationItemType;
    size?: keyof typeof DSSizes;
    children: INavigationItem[];
    indicator?: INavigationIndicator;
    border?: boolean;
}
export interface INavigationItemAccordion extends INavigationItem {
    open: boolean;
    iconLeading?: string;
}
export interface INavigationItemLink extends INavigationItem {
    iconLeading?: string;
    iconTrailing?: string;
    href: string;
    external?: boolean;
    anchor?: string;
    header?: boolean;
    indicator?: INavigationIndicator;
}
export interface INavigationItemHeading extends INavigationItem {
    iconLeading: string;
}
export interface INavigationDivider extends INavigationItem {
}
