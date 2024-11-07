import { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';

interface IBaseProps<T> extends HTMLAttributes<T> {}

export interface IButtonProps extends IBaseProps<HTMLButtonElement>, ButtonHTMLAttributes<HTMLButtonElement> {}

export interface ITextProps extends IBaseProps<HTMLParagraphElement>, ButtonHTMLAttributes<HTMLParagraphElement> {}

export interface IBoxProps extends IBaseProps<HTMLDivElement>, ButtonHTMLAttributes<HTMLDivElement> {}

export interface IFuncLangParams {
  params: {
    lang: string;
  };
}

export interface ISubLink {
  title: string;
  link: string;
}

interface INavbarItem {
  logo?: string;
  title?: string;
  link: string;
  icon?: string;
  subLinks?: ISubLink[];
  isButton?: boolean;
}

export interface INavbar {
  navbar: INavbarItem[];
}

interface JobDescription {
  job_type: string;
  short_brief: string;
  question: string;
  description: string;
}

interface DeveloperSectionLgScreen {
  question: string;
}

interface SalaryLgScreen {
  average: string;
  note: string;
}

interface ReplacementPolicyLgScreen {
  maximum_replacements: string;
  note: string;
}

interface WorkingHoursLgScreen {
  maximum_hours: string;
  details: string;
}

interface CheckboxSmScreen {
  title: string;
}

export interface SlideItemLgScreen {
  icon: string;
  title: string;
}

export interface ILeftContent {
  job_description: JobDescription;
  developer_section_lg_screen: DeveloperSectionLgScreen;
  salary_lg_screen: SalaryLgScreen;
  replacement_policy_lg_screen: ReplacementPolicyLgScreen;
  working_hours_lg_screen: WorkingHoursLgScreen;
  checkboxes_sm_screen: CheckboxSmScreen[];
  slide_items_lg_screen: SlideItemLgScreen[];
}

export interface IRightContent {
  image: string;
  flag_icon: string;
  name: string;
  job: string;
  description: string;
  sub_description: string;
  detail_1: string;
  detail_2: string;
}
[];

// bottom content section
interface ImageData {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ContactInfo {
  phone: string;
  email: string;
}

interface Service {
  icon: ImageData;
  title: string;
  link_text: string;
  link_icon: ImageData;
}

interface CompanyInfo {
  name: string;
  ceo: string;
  details: CompanyDetail[];
}

interface CompanyDetail {
  company_name: string;
  ceo_name: string;
}

interface RegistrationInfo {
  business_cin: string;
  business_registration_number: string;
  CIN: string;
}

interface AddressInfo {
  korea: string;
  india: string;
}

export interface MainContent {
  company_primary_data_?: {
    logo: ImageData;
    description: string;
    contact: ContactInfo;
  };
  services?: Service[];
  company?: CompanyInfo;
  registration?: RegistrationInfo;
  address?: AddressInfo;
}

export interface IPrime_company_data {
  company_primary_data_?: {
    logo: ImageData;
    description: string;
    contact: ContactInfo;
  };
  services?: Service[];
}

export interface ISecondary_company_data {
  company: CompanyInfo;
  registration: RegistrationInfo;
  address: AddressInfo;
}
